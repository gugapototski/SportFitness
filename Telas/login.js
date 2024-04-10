import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform, // Importe Platform
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import TextInputComponente from "../components/TextInput";
import ButtonComponente from "../components/Button";
import styles from "./loginEcadastroCSS";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  const handleRegister = () => {
    console.log("Clique em Registrar");
  };
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
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
            <Text style={styles.title}>Sign in</Text>
            <TextInputComponente
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />

            <View>
              <TextInputComponente
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerCadastro}>
              <Text style={styles.textCadastroWhite}>
                Ainda não tem cadastro?
              </Text>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.textCadastroGreen}>Clique aqui</Text>
              </TouchableOpacity>
            </View>

            <ButtonComponente title="Entrar" onPress={handleLogin} />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
