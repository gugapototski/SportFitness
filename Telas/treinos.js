import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Treinos = () => {
  const [treinos, setTreinos] = useState([]);
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
    const fetchTreinos = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(`/treinos/findById/${user.iduser}`);
      const sortedTreinos = response.data.sort(
        (a, b) => a.diasemana - b.diasemana
      );
      setTreinos(sortedTreinos);
    };

    fetchTreinos();
  }, []);

  const handlePress = (dia, index) => {
    navigation.navigate("TreinoDiaAluno", { dia: dia, index: index });
  };

  return (
    <View style={styles.container}>
      <View style={styles.diasTreino}>
        {treinos.map((treino, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(diasDaSemana[index], index)}
          >
            <View style={styles.entreDias}>
              <Text style={styles.text}>{diasDaSemana[index]}</Text>
              <View style={styles.workoutDesc}>
                <Text style={styles.subText}>{treino.descricao}</Text>
                <Image
                  style={styles.image}
                  source={require("../Imagens/check_treino.png")}
                />
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
    position: "absolute",
    right: "0%",
    marginLeft: 60,
  },
});

export default Treinos;
