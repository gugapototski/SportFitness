import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Treinos = () => {
  const navigation = useNavigation();

  const handlePress = (dia) => {
    navigation.navigate("TreinoDiaAluno", { dia: dia });
  };
  return (
    <View style={styles.container}>
      <View style={styles.diasTreino}>
        <TouchableOpacity onPress={() => handlePress("Segunda")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Segunda</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Peito e Cardio</Text>
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

        <TouchableOpacity onPress={() => handlePress("Terça")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Terça</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Costas e Cardio</Text>
              <Image
                style={styles.image}
                source={require("../Imagens/unlock.png")}
              />
            </View>
            <View>
              <Image source={require("../Imagens/line.png")} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("Quarta")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Quarta</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Perna, Panturilha e Cardio</Text>
              <Image
                style={styles.image}
                source={require("../Imagens/lock.png")}
              />
            </View>
            <View>
              <Image source={require("../Imagens/line.png")} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("Quinta")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Quinta</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Biceps, Tricpes e Cardio</Text>
              <Image
                style={styles.image}
                source={require("../Imagens/lock.png")}
              />
            </View>
            <View>
              <Image source={require("../Imagens/line.png")} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("Sexta")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Sexta</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Glúteo, Antebraço e Cardio</Text>
              <Image
                style={styles.image}
                source={require("../Imagens/lock.png")}
              />
            </View>
            <View>
              <Image source={require("../Imagens/line.png")} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("Sabado")}>
          <View style={styles.entreDias}>
            <Text style={styles.text}>Sabado</Text>
            <View style={styles.workoutDesc}>
              <Text style={styles.subText}>Cardio e descanso</Text>
              <Image
                style={styles.image}
                source={require("../Imagens/lock.png")}
              />
            </View>
            <View>
              <Image source={require("../Imagens/line.png")} />
            </View>
          </View>
        </TouchableOpacity>
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
