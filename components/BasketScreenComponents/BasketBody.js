import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { urlFor } from "../../sanity";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../storeFolder/basketSlice";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function BasketBody({ groupedItemsInBasket, restaurantInfo }) {
  const dispatch = useDispatch();
  return (
    <>
      <View className="bg-orange-50  py-4 my-5 ">
        <View className="flex-row items-center space-x-5 justify-center">
          <Image
            className=" h-16 w-16 rounded-full"
            source={{ uri: urlFor(restaurantInfo.imgUrl).url() }}
          />
          <View>
            <Text className="text-lg text-red-900 font-bold ">
              {restaurantInfo.title}
            </Text>
            <Text className=" text-red-900 ">{restaurantInfo.address}</Text>
          </View>
        </View>
        <View className="flex-row items-center mt-3 px-5 ">
          <View className="flex-1 flex-row items-center space-x-1 bg-orange-200 py-3 px-2 mr-3 rounded-md">
            <MaterialIcons name="access-time" size={24} color="#7f1d1d" />
            <Text className="  text-red-900 font-bold text-center">
              Tahmini Teslimat Süresi 35-45 dk.
            </Text>
          </View>
          <Pressable className=" bg-orange-200 px-4 py-[11px] rounded-2xl">
            <Text className="text-red-800 font-bold text-sm">Değiştir</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView>
        {Object.entries(groupedItemsInBasket).map(([key, el]) => (
          <View
            key={key}
            className="flex-row items-center space-x-3 bg-orange-50 border-orange-200 border-2 rounded-full mb-3 mx-1 py-2 px-4"
          >
            <Text className="text-red-900 font-extrabold">{el.length} x</Text>
            <Image
              source={{ uri: urlFor(el[0]?.image).url() }}
              className=" h-10 w-10 rounded-xl"
            />
            <Text className="flex-1 text-red-900 font-bold">{el[0]?.name}</Text>
            <Text className="text-amber-800 ">{el[0]?.price} TL</Text>
            <Pressable
              className="flex-row items-center space-x-1 bg-red-800 p-2 rounded-2xl"
              onPress={() => dispatch(removeFromBasket({ id: key }))}
            >
              <Text className="text-orange-100 font-bold">Çıkar</Text>
              <Fontisto
                name="shopping-basket-remove"
                size={20}
                color="#ffedd5"
              />
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default BasketBody;
