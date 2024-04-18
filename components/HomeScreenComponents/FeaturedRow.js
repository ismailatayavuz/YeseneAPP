import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { client } from "../../sanity";

import RestaurantCardHorizontal from "./RestaurantCardHorizontal";

function FeaturedRow({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id==$id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View className="bg-orange-50 mx-2  mt-4 mb-1 pb-2 rounded-2xl ">
      <View className="bg-orange-50 rounded-2xl">
        <View className="flex-row items-center mt-4 px-4 justify-between">
          <Text className="font-extrabold text-xl text-red-900 flex-1">
            {title}
          </Text>
          <Text className="text-red-900 text-l font-extrabold">
            Sağa Kaydır
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#7f1d1d" />
        </View>
        <Text className="text-red-900 text-xs px-4 mb-2">{description}</Text>
      </View>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(el) => (
          <RestaurantCardHorizontal
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
        )}
      />
    </View>
  );
}

export default FeaturedRow;
