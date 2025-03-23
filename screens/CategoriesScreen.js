import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { useState } from "react";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}
function CategoriesScreen() {
  const [numColumns, setNumColumns] = useState(2);
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={numColumns}
      //   key={numColumns}
    />
  );
}

export default CategoriesScreen;
