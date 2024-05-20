// Telas/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importe AsyncStorage
import TextInputComponente from "../components/TextInput";
import ButtonComponente from "../components/Button";
import styles from "./loginEcadastroCSS";
import AxiosApi from "../Comps/axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await AxiosApi.post("/user/login", {
        email,
        senha: password,
      });
      console.log("Resposta do login:", response.data);

      if (response.data && !response.data.error) {
        // Obtenha os dados do usuário da resposta
        const { user } = response.data;

        // Armazene os dados do usuário no AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(user));

        // Exibir um alerta de sucesso
        Alert.alert("Login bem-sucedido", "Você foi logado com sucesso!");

        // Navegar para a tela principal após login bem-sucedido
        navigation.navigate("Home"); // Certifique-se de que "Home" é o nome correto da sua tela principal
      } else {
        // Exibir um alerta de erro com a mensagem do servidor
        Alert.alert(
          "Erro no login",
          response.data.message || "Erro desconhecido"
        );
      }
    } catch (error) {
      console.error(
        "Erro no login:",
        error.response ? error.response.data : error.message
      );

      // Exibir um alerta de erro
      Alert.alert(
        "Erro no login",
        error.response ? error.response.data.message : error.message
      );
    }
  };

  const handleRegister = () => {
    console.log("Clique em Registrar");
    // Navegar para a tela de cadastro
    navigation.navigate("Cadastro"); // Certifique-se de que "Cadastro" é o nome correto da sua tela de cadastro
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
