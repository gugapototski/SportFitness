import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reloadAppAsync } from "expo";

const TreinosPersonal = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [treinos, setTreinos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [idTreinos, setidTreinos] = useState();
  const [reload, setReload] = useState(false);

  const navigation = useNavigation();
  const diasDaSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(
        `/user/by-personal/${user.codpersonal}`
      );
      setStudents(response.data);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchTreinos = async () => {
      if (selectedStudentId) {
        const response = await AxiosApi.get(
          `/treinos/findById/${selectedStudentId}`
        );
        const sortedTreinos = response.data.sort(
          (a, b) => a.diasemana - b.diasemana
        );
        setTreinos(sortedTreinos);
      }
    };

    fetchTreinos();
  }, [selectedStudentId, reload]);

  const handlePress = (dia) => {
    navigation.navigate("TreinoDiaAluno", {
      dia: dia,
      iduser: selectedStudentId,
    });
  };

  const handleEditPress = (treino) => {
    setidTreinos(treino.idtreinos);
    setDescricao(treino.descricao);
    setModalVisible(true);
    console.log(treino);
  };

  const handleSavePress = async () => {
    console.log(idTreinos);
    await AxiosApi.put(`/treinos/updateDescricaoTreino/${idTreinos}`, {
      descricao: descricao,
    });
    setModalVisible(false);
    setReload(!reload);
  };

  const handleStudentSelection = async (itemValue) => {
    setSelectedStudentId(itemValue);
    await AsyncStorage.setItem("selectedStudentId", itemValue.toString());
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar Descrição</Text>
            <TextInput
              style={styles.input}
              onChangeText={setDescricao}
              value={descricao}
            />
            <Button title="Salvar" onPress={handleSavePress} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Picker
        selectedValue={selectedStudentId}
        style={{ height: 50, width: 150, backgroundColor: "white" }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedStudentId(itemValue);
          handleStudentSelection(itemValue);
        }}
      >
        {students.map((student) => (
          <Picker.Item
            key={student.iduser}
            label={student.nome}
            value={student.iduser}
          />
        ))}
      </Picker>
      <View style={styles.diasTreino}>
        {treinos.map((treino, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(diasDaSemana[index])}
          >
            <View style={styles.entreDias}>
              <Text style={styles.text}>{diasDaSemana[index]}</Text>
              <View style={styles.workoutDesc}>
                <Text style={styles.subText}>{treino.descricao}</Text>
                <TouchableOpacity onPress={() => handleEditPress(treino)}>
                  <Image
                    style={styles.image}
                    source={require("../Imagens/Edit.png")}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image source={require("../Imagens/line.png")} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "white",
  },
  subText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 13,
    color: "white",
  },
  diasTreino: {
    flex: 1,
    top: 10,
  },
  workoutDesc: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 15,
  },
  entreDias: {
    marginTop: 18,
  },
  image: {
    position: "relative",
    left: 90,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TreinosPersonal;
