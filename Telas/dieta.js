import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import arrowDown from "../Imagens/flechabaixo.png";
import arrowUp from "../Imagens/flechacima.png";
import clockIcon from "../Imagens/relogio.png";
import AxiosApi from "../Comps/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DietScreen = () => {
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      const response = await AxiosApi.get(`/dieta/findByUser/${user.iduser}`);
      setMeals(response.data);
    };

    fetchMeals();
  }, []);

  const handlePress = (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
    } else {
      setSelectedMealId(mealId);
    }
  };

  return (
    <View style={styles.container}>
      {meals.map((meal) => (
        <View
          key={meal.iddieta}
          style={[styles.mealContainer, styles.greenBorder]}
        >
          <TouchableOpacity
            onPress={() => handlePress(meal.iddieta)}
            style={styles.row}
          >
            <View style={styles.row}>
              <Image source={clockIcon} style={styles.clockIcon} />
              <Text style={[styles.title]}>
                Refeição {meal.nrrefeicao} {"\n"} {meal.hrrefeicao}
              </Text>
            </View>
            <Image
              source={selectedMealId === meal.iddieta ? arrowUp : arrowDown}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          {selectedMealId === meal.iddieta && (
            <View style={styles.optionsContainer}>
              <Text style={[styles.option]}>{meal.descricao}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  mealContainer: {
    marginBottom: 30,
    width: "75%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#3EA519",
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 17,
    color: "green",
    marginBottom: 5,
  },
  optionsContainer: {
    backgroundColor: "black",
    padding: 10,
  },
  option: {
    fontSize: 17,
    color: "white",
    marginBottom: 5,
  },
  arrowIcon: {
    width: 20,
    height: 40,
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default DietScreen;
