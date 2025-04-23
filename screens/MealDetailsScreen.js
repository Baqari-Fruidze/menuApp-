import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealDetails from "../components/MealDetails";

function MealDetailsScreen({ route }) {
  // const route = useRoute();
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <Text>ingredients</Text>
      {selectedMeal.ingredients.map((ingredients, index) => {
        return <Text key={index}>{ingredients}</Text>;
      })}
      <Text>steps</Text>
      {selectedMeal.steps.map((step, index) => {
        return <Text key={index}>{step}</Text>;
      })}
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
