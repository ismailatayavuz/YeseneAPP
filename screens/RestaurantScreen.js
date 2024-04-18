import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { basketItemsSelector } from "../storeFolder/basketSlice";
import { setRestaurant } from "../storeFolder/restaurantSlice";

import DishRow from "../components/RestaurantScreenComponents/DishRow";
import BasketIcon from "../components/RestaurantScreenComponents/BasketIcon";
import HeaderRestaurant from "../components/RestaurantScreenComponents/HeaderRestaurant";

function RestaurantScreen() {
  const dispatch = useDispatch();

  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = useRoute().params;

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);

  const basketIsNotEmpty = useSelector(basketItemsSelector).length > 0;

  return (
    <>
      <SafeAreaView className="bg-orange-100">
        <ScrollView>
          <HeaderRestaurant imgUrl={imgUrl} />
          <Text className="text-xl text-red-900 font-extrabold px-4 pt-6 mb-3">
            Menü
          </Text>
          <View className="pb-28">
            {dishes.map((el) => (
              <DishRow
                key={el._id}
                id={el._id}
                name={el.name}
                description={el.short_description}
                price={el.price}
                image={el.image}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      {basketIsNotEmpty && <BasketIcon />}
    </>
  );
}

export default RestaurantScreen;
