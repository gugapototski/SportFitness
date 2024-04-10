import React from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const TextInputComponente = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="white"
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    width: windowWidth - 40,
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#444444",
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    fontSize: 15,
  },
});

export default TextInputComponente;
