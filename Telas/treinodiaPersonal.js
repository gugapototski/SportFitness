import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AxiosApi from "../Comps/axios"; // Importando o AxiosApi

const diasDaSemana = {
  Segunda: 1,
  Terça: 2,
  Quarta: 3,
  Quinta: 4,
  Sexta: 5,
  Sabado: 6,
};

const TreinoDiaAluno = () => {
  const route = useRoute();
  const { dia, iduser } = route.params;
  const diaNumero = diasDaSemana[dia];
  const [exercicios, setExercicios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTreino, setSelectedTreino] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchExercicios = async () => {
      const response = await AxiosApi.get(
        `/treinodia/findByTreinoDia/${iduser}/${diaNumero}`
      );
      setExercicios(response.data);
    };

    fetchExercicios();
  }, [iduser, dia, reload]);

  const handleEditPress = (treino) => {
    setSelectedTreino(treino);
    setTitulo(treino.titulo);
    setDescricao(treino.descricao);
    setModalVisible(true);
  };

  const handleSavePress = async () => {
    await AxiosApi.put(
      `/treinodia/updateTreinoDiaDescricao/${selectedTreino.idtreinodia}`,
      {
        titulo: titulo,
        descricao: descricao,
      }
    );
    setModalVisible(false);
    setReload(!reload);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dia}</Text>
      <View style={styles.containerTreino}>
        <ScrollView style={styles.scrollView}>
          {exercicios.map((exercicio, index) => (
            <View key={index}>
              <View style={styles.exercicioContainer}>
                <View style={styles.exercicioDetalhesContainer}>
                  <Text style={styles.exercicioNome}>{exercicio.titulo}</Text>
                  <Text style={styles.exercicioDetalhes}>
                    {exercicio.descricao}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => handleEditPress(exercicio)}>
                  <Image
                    style={styles.image}
                    source={require("../Imagens/Edit.png")}
                  />
                </TouchableOpacity>
              </View>
              {index < exercicios.length - 0 && (
                <View style={styles.linhaContainer}>
                  <Image
                    source={require("../Imagens/line.png")}
                    style={styles.linhaVerde}
                  />
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
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
            <Text style={styles.modalText}>Editar Exercício</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={setTitulo}
              value={titulo}
              placeholder="Título"
            />
            <TextInput
              style={styles.modalInput}
              onChangeText={setDescricao}
              value={descricao}
              placeholder="Descrição"
            />
            <Button title="Salvar" onPress={handleSavePress} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerTreino: {
    position: "absolute",
    top: "10%",
    width: "88%",
    right: "6%",
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 25,
    fontFamily: "Montserrat-SemiBold",
  },
  exercicioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  exercicioDetalhesContainer: {
    flex: 1,
    marginLeft: 10,
  },
  exercicioNome: {
    fontSize: 18,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    marginLeft: -28,
    marginVertical: 5,
  },
  exercicioDetalhes: {
    fontSize: 15,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 3,
  },
  linhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    zIndex: 1,
  },
  linhaVerde: {
    flex: 1,
    height: 1,
    marginRight: 10,
  },
  checkButton: {
    marginLeft: 10,
  },
  checkImage: {
    width: 30,
    height: 30,
  },
  finalizarButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 60,
    marginLeft: 30,
  },
  finalizarButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    zIndex: 1,
    marginLeft: 0,
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
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
  modalInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TreinoDiaAluno;
