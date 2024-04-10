import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const ButtonComponente = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    width: windowWidth - 230, // Ajuste a largura conforme necessário
    backgroundColor: "#3EA519",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default ButtonComponente;
