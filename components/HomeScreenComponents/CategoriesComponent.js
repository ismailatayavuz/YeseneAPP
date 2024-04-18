import { useEffect, useState } from "react";
import { client } from "../../sanity";
import { ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

function CategoriesComponent() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client.fetch(`*[_type=="category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pt-2 px-3"
    >
      {categories.map((el) => (
        <CategoryCard imgUrl={el.image} title={el.name} key={el._id} />
      ))}
    </ScrollView>
  );
}

export default CategoriesComponent;
