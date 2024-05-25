import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import ButtonComponente from "../components/Button";
import { useRoute } from "@react-navigation/native";
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TreinoDiaAluno = () => {
  const [exercicios, setExercicios] = useState([]);
  const route = useRoute();
  const { dia } = route.params;
  const { index } = route.params;

  useEffect(() => {
    const fetchExercicios = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(
        `/treinodia/findByTreinoDia/${user.iduser}/${index + 1}`
      );
      console.log(response);
      setExercicios(response.data);
    };

    fetchExercicios();
  }, []);

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
                <CheckButton />
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
          <View style={styles.buttonContainer}>
            <ButtonComponente title="Finalizar treino" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const CheckButton = () => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={styles.checkButton}
    >
      <Image
        source={
          checked
            ? require("../Imagens/check_treino.png")
            : require("../Imagens/Check-red.png")
        }
        style={styles.checkImage}
      />
    </TouchableOpacity>
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
});

export default TreinoDiaAluno;
