import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Perfil from "../Telas/perfil";

const AppHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        <Text style={styles.sport}>Sport</Text>
        <Text style={styles.fitness}>Fitness</Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
        <Image
          source={require("../Imagens/perfil.png")} // Substitua pelo caminho correto do seu ícone
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    paddingTop: 50, // Adicione um padding na parte superior
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
  },
  sport: {
    color: "#3EA519",
  },
  fitness: {
    color: "#fff",
  },
  icon: {
    width: 43, // Ajuste conforme o tamanho do seu ícone
    height: 38, // Ajuste conforme o tamanho do seu ícone
    resizeMode: "contain",
    right: "50%",
  },
});

export default AppHeader;
