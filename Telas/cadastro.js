import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import ButtonComponente from "../components/Button";
import TextInputComponente from "../components/TextInput";
import styles from "./loginEcadastroCSS";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [personalCode, setPersonalCode] = useState("");

  const handleRegister = () => {
    // Lógica de registro
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ImageBackground
        source={require("../Imagens/Fundo.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.greenText}>Sport</Text>
              <Image
                source={require("../Imagens/logo.png")}
                style={styles.logoImage}
              />
            </View>
            <Text style={styles.whiteText}>Fitness</Text>
          </View>
          <View style={styles.containerLogin}>
            <Text style={styles.title}>Create{"\n"}Account</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome</Text>
              <TextInputComponente
                placeholder="Ex: João Silva"
                onChangeText={setName}
                value={name}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInputComponente
                placeholder="Ex: joao.silva@email.com"
                onChangeText={setEmail}
                value={email}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Senha</Text>
              <TextInputComponente
                placeholder="Ex: ••••••••"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Código do Personal</Text>
              <TextInputComponente
                placeholder="Ex: 123456"
                onChangeText={setPersonalCode}
                value={personalCode}
              />
            </View>

            <View style={styles.headerCadastro}>
              <Text style={styles.textCadastroWhite}>Já possui cadastro?</Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.textCadastroGreen}>Clique aqui</Text>
              </TouchableOpacity>
            </View>

            <ButtonComponente title="Registrar" onPress={handleRegister} />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
