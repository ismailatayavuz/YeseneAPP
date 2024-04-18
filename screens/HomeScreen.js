import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { client } from "../sanity";

import HeaderHome from "../components/HomeScreenComponents/HeaderHome";
import SearchBar from "../components/HomeScreenComponents/SearchBar";
import CategoriesComponent from "../components/HomeScreenComponents/CategoriesComponent";
import FeaturedRow from "../components/HomeScreenComponents/FeaturedRow";

function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
    
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-orange-100 flex-1">
      <HeaderHome />
      <SearchBar />
      <ScrollView className="bg-orange-100">
        <CategoriesComponent />
        {featuredCategories.map((el) => (
          <FeaturedRow
            title={el.name}
            description={el.short_description}
            key={el._id}
            id={el._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
