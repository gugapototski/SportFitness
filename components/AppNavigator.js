import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import ListaPersonal from "../Telas/listaPersonal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import Dicas from "../Telas/dicas";
import AppHeader from "../components/AppHeader";
import LoginScreen from "../Telas/login";
import CadastroScreen from "../Telas/cadastro";
import PerfilScreen from "../Telas/perfil";
import TreinosStackPersonal from "./StackNavigatorPersonal";
import DietaPersonal from "../Telas/dietaPersonal";
import TreinosStack from "./StackNavigator";
import Dieta from "../Telas/dieta";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <SafeAreaView style={styles.container}>
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
            height: 2,
            marginBottom: 10,
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
    </SafeAreaView>
  );
}

function HomeTabsPersonal() {
  return (
    <SafeAreaView style={styles.container}>
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
            height: 2,
            marginBottom: 10,
          },
        }}
      >
        <Tab.Screen
          name="TreinosStack"
          component={TreinosStackPersonal}
          options={{ tabBarLabel: "Treinos" }}
        />
        <Tab.Screen
          name="Dieta"
          component={DietaPersonal}
          options={{ tabBarLabel: "Dieta" }}
        />
        <Tab.Screen
          name="Dicas"
          component={Dicas}
          options={{ tabBarLabel: "Dicas" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListaPersonal"
          component={ListaPersonal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePersonal"
          component={HomeTabsPersonal}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
