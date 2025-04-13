import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";

function MealDetailsScreen({ route }) {
  // const route = useRoute();
  const { mealId } = route.params;

  return <Text>meals details ({mealId})</Text>;
}

export default MealDetailsScreen;
