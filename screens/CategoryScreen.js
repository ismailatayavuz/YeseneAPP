import { useEffect, useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { client } from "../sanity";
import RestaurantCardVertical from "../components/CategoryScreen.js/RestaurantCardVertical";
import HeaderCategory from "../components/CategoryScreen.js/HeaderCategory";

function CategoryScreen({ route }) {
  const { catName, catImg } = route.params;
  const [restaurants, setRestaurants] = useState([]);
  const catLength = Object.values(restaurants).filter(
    (el) => el.type.name === catName
  ).length;
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id=="f6a0eb43-2af4-4fe8-8c1e-25e25d082019" ] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]`
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-orange-100">
      <FlatList
        data={restaurants}
        ListHeaderComponent={
          <HeaderCategory
            catImg={catImg}
            catName={catName}
            catLength={catLength}
          />
        }
        renderItem={(el) =>
          el.item.type.name === catName && (
            <RestaurantCardVertical
              id={el.item._id}
              imgUrl={el.item.image}
              address={el.item.address}
              title={el.item.name}
              dishes={el.item.dishes}
              rating={el.item.rating}
              short_description={el.item.short_description}
              genre={el.item.type?.name}
              long={el.item.long}
              lat={el.item.lat}
            />
          )
        }
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}

export default CategoryScreen;
