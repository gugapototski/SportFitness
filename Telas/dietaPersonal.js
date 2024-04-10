import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import arrowDown from '../Imagens/flechabaixo.png';
import arrowUp from '../Imagens/flechacima.png';
import clockIcon from '../Imagens/relogio.png';
import editIcon from '../Imagens/editor.png';

const DietaPersonal = () => {
  const [selectedMealId, setSelectedMealId] = useState(null);

  const handleClockPress = (mealId) => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
    } else {
      setSelectedMealId(mealId);
    }
  };

  const handleEditPress = (mealId) => {
    if (selectedMealId !== mealId) {
      setSelectedMealId(mealId);
    } else {
      setSelectedMealId(null);
    }
  };

  const meals = [
    { id: 1, name: 'Refeição 1                                    9:15', foods: ['Ovos', 'Aveia', 'Frutas'] },
    { id: 2, name: 'Refeição 2                                  12:00', foods: ['Iogurte', 'Frutas', 'Castanhas'] },
    { id: 3, name: 'Refeição 3                                  16:00', foods: ['Arroz', 'Feijão', 'Frango'] },
    { id: 4, name: 'Refeição 4                                  18:00', foods: ['Sanduíche', 'Frutas', 'Chá'] },
    { id: 5, name: 'Refeição 5                                  22:00', foods: ['Legumes à vontade', 'Frango: 120g', 'Arroz: 250g'] },
  ];

  return (
    <View style={styles.container}>
      {meals.map((meal) => (
        <View key={meal.id} style={[styles.mealContainer, styles.greenBorder]}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => handleClockPress(meal.id)} style={styles.clockContainer}>
              <Image source={clockIcon} style={styles.clockIcon} />
              <Text style={styles.title}>{meal.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEditPress(meal.id)} style={styles.editContainer}>
              <Image source={editIcon} style={styles.editIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClockPress(meal.id)} style={styles.arrowContainer}>
              <Image source={selectedMealId === meal.id ? arrowUp : arrowDown} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          {selectedMealId === meal.id && (
            <View style={styles.optionsContainer}>
              {meal.foods.map((food, index) => (
                <Text key={index} style={styles.option}>{food}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  mealContainer: {
    marginBottom: 30,
    width: '75%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#3EA519',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 1,
  },
  optionsContainer: {
    backgroundColor: 'black',
    padding: 10,
  },
  option: {
    fontSize: 17,
    color: 'white',
    marginBottom: 5,
  },
  arrowIcon: {
    width: 20,
    height: 40,
    marginRight: 5,
  },
  editIcon: {
    width: 25,
    height: 25,
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editContainer: {
    position: 'absolute',
    right: -60, 
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});

export default DietaPersonal;