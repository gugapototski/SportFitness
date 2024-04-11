import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import arrowDown from "../Imagens/flechabaixo.png";
import arrowUp from "../Imagens/flechacima.png";
import clockIcon from "../Imagens/relogio.png";

const DietScreen = () => {
  const [selectedMealId, setSelectedMealId] = useState(null);

  const handlePress = (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
    } else {
      setSelectedMealId(mealId);
    }
  };

  const meals = [
    {
      id: 1,
      name: "Refeição 1",
      time: "09:15",
      foods: ["Ovos", "Aveia", "Frutas"],
    },
    {
      id: 2,
      name: "Refeição 2",
      time: "12:00",
      foods: ["Iogurte", "Frutas", "Castanhas"],
    },
    {
      id: 3,
      name: "Refeição 3",
      time: "16:00",
      foods: ["Arroz", "Feijão", "Frango"],
    },
    {
      id: 4,
      name: "Refeição 4",
      time: "18:00",
      foods: ["Sanduíche", "Frutas", "Chá"],
    },
    {
      id: 5,
      name: "Refeição 5",
      time: "22:00",
      foods: ["Legumes à vontade", "Frango: 120g", "Arroz: 250g"],
    },
  ];

  return (
    <View style={styles.container}>
      {meals.map((meal) => (
        <View key={meal.id} style={[styles.mealContainer, styles.greenBorder]}>
          <TouchableOpacity
            onPress={() => handlePress(meal.id)}
            style={styles.row}
          >
            <View style={styles.row}>
              <Image source={clockIcon} style={styles.clockIcon} />
              <Text style={[styles.title]}>
                {meal.name} {"\n"} {meal.time}
              </Text>
            </View>
            <Image
              source={selectedMealId === meal.id ? arrowUp : arrowDown}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          {selectedMealId === meal.id && (
            <View style={styles.optionsContainer}>
              {meal.foods.map((food, index) => (
                <Text key={index} style={[styles.option]}>
                  {food}
                </Text>
              ))}
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
