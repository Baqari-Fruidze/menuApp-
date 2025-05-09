import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { useWindowDimensions } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  const { width } = Dimensions.get("window");
  const itemWidth = width / 2 - 32;

  const { height } = useWindowDimensions();
  const itemHeight = height > 600 ? 200 : 100;
  return (
    <View style={[styles.gridItem, { width: itemWidth, height: itemHeight }]}>
      <Pressable
        android_ripple={{ color: "ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    // height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1 },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
