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
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonComponente from "../components/Button";

const TreinosPersonal = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [treinos, setTreinos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [descricao, setDescricao] = useState("");
  const [idTreinos, setidTreinos] = useState();
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const navigation = useNavigation();
  const diasDaSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(
        `/user/by-personal/${user.codpersonal}`
      );
      setStudents(response.data);
      setItems(response.data.map(student => ({
        label: student.nome,
        value: student.iduser
      })));
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

  const handleAddTreino = async () => {
    if (treinos.length < 6) {
      await AxiosApi.post('/treinos/criar', {
        iduser: selectedStudentId,
        diasemana: treinos.length + 1,
        descricao: "Novo Treino",
        statustreino: 1
      });
      setReload(!reload);
    }
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
      <DropDownPicker
        open={open}
        value={selectedStudentId}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedStudentId}
        setItems={setItems}
        onChangeValue={(itemValue) => {
          handleStudentSelection(itemValue);
        }}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
      />
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
        {treinos.length < 6 && selectedStudentId && (
          <View style={styles.buttonContainer}>
            <ButtonComponente onPress={handleAddTreino} title="Adicionar Treino" />
          </View>
        )}
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
  dropdown: {
    height: 50,
    width: 200,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },
  dropdownContainer: {
    backgroundColor: "white",
    borderColor: "gray",
  },
  dropdownText: {
    color: "black",
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default TreinosPersonal;
