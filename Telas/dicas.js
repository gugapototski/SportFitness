import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dicas = () => {
  const [dicas, setDicas] = useState([]);

  useEffect(() => {
    const fetchDicas = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(`/dicas/random`);
      setDicas(response.data);
    };

    fetchDicas();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {dicas.map((dica, index) => (
          <View key={index} style={styles.dicaContainer}>
            <Entypo
              name="help"
              marginBottom={16}
              size={40}
              color="#3EA519"
              style={styles.icon}
            />
            <Text style={styles.dicaText}>{dica.descricao}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  dicaContainer: {
    borderWidth: 1,
    borderColor: "#3EA519",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    top: 8,
    marginRight: 10,
  },
  dicaText: {
    fontSize: 14,
    color: "white",
    flex: 1,
    fontFamily: "Montserrat-SemiBold",
  },
});

export default Dicas;
