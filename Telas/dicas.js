import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const dicas = [
  "Dica 1: Beber água suficiente durante o dia ajuda na recuperação muscular e no desempenho durante o treino.",
  "Dica 2: Priorize alimentos ricos em proteínas para ajudar na construção muscular e na recuperação pós-treino.",
  "Dica 3: Mantenha uma postura correta durante os exercícios para evitar lesões e maximizar os resultados",
  "Dica 4: Descanse pelo menos um dia na semana para permitir a recuperação adequada do corpo",
  "Dica 5: Inclua exercícios de mobilidade e alongamento no início e no final de cada sessão de treino para melhorar a flexibilidade e reduzir o risco de lesões.",
];

const Dicas = () => {
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
            <Text style={styles.dicaText}>{dica}</Text>
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
