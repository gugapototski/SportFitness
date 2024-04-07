import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AppHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        <Text style={styles.sport}>Sport</Text>
        <Text style={styles.fitness}>Fitness</Text>
      </Text>
      <Button title="Perfil" onPress={() => navigation.navigate("Perfil")} />
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
});

export default AppHeader;
