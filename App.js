import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { setCustomText } from "react-native-global-props";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      });

      const customTextProps = {
        style: {
          fontFamily: "Montserrat-SemiBold",
        },
      };
      setCustomText(customTextProps);

      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // ou retorne algum componente de carregamento
  }

  return <AppNavigator />;
}
