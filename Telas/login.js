import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform, // Importe Platform
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";

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
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={setEmail}
              value={email}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                placeholderTextColor="white"
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 8,
    margin: 20,
  },
  greenText: {
    fontSize: 40,
    fontFamily: "Montserrat-SemiBold",
    color: "#3EA519",
  },
  whiteText: {
    fontSize: 40,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
  },
  logoImage: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerLogin: {
    top: 90,
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 45,
    marginBottom: 20,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  input: {
    width: windowWidth - 40,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#444444",
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    fontSize: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#444444",
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    textAlign: "center",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  headerCadastro: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCadastroWhite: {
    fontSize: 10,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
    margin: 4,
  },
  textCadastroGreen: {
    fontSize: 10,
    fontFamily: "Montserrat-SemiBold",
    color: "#3EA519",
    marginLeft: 0,
  },
  button: {
    width: windowWidth - 230,
    backgroundColor: "#3EA519",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
});

export default LoginScreen;
