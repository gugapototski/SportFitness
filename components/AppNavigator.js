import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

// Importe suas telas e o cabeçalho aqui
import TreinosStack from "./StackNavigator";
import Dieta from "../Telas/dieta";
import Dicas from "../Telas/dicas";
import AppHeader from "../components/AppHeader";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppHeader />
        <Tab.Navigator
          initialRouteName="TreinosStack"
          screenOptions={{
            tabBarActiveTintColor: "#3EA519",
            tabBarInactiveTintColor: "#fff",
            tabBarLabelStyle: {
              fontSize: 12,
              fontFamily: "Montserrat-SemiBold",
            },
            tabBarStyle: { backgroundColor: "black" },
            tabBarIndicatorStyle: {
              backgroundColor: "#3EA519",
              height: 2, // Ajuste a espessura da linha aqui
              marginBottom: 10, // Ajuste a distância da linha até o nome aqui
            },
          }}
        >
          <Tab.Screen
            name="TreinosStack"
            component={TreinosStack}
            options={{ tabBarLabel: "Treinos" }}
          />
          <Tab.Screen
            name="Dieta"
            component={Dieta}
            options={{ tabBarLabel: "Dieta" }}
          />
          <Tab.Screen
            name="Dicas"
            component={Dicas}
            options={{ tabBarLabel: "Dicas" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
