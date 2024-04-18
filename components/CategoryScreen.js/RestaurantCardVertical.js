import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../../sanity";
function RestaurantCardVertical({
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
}) {
  const navigation = useNavigation();
  return (
    <Pressable
      className="bg-[#fff7ed] shadow shadow-gray-400  mx-4 my-3 flex-row items-center  rounded-[40px] "
      onPress={() =>
        navigation.navigate("Restaurant", {
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
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-52 w-48 rounded-[40px] "
      />
      <View className="items-center flex-1">
        <Text className="text-2xl font-extrabold text-[#7f1d1d] ">{title}</Text>
        <View className="flex-row items-center space-x-1 mb-4">
          <Ionicons name="star" size={24} color="#f59e0b" />
          <Text className="text-[#f59e0b] font-extrabold  text-lg">
            {rating} / 5
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 mb-2">
          <Ionicons name="fast-food" size={22} color="#fdba74" opacity={0.8} />
          <Text className="text-xs font-bold text-[#92400e]">{genre}</Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Ionicons
            name="location-sharp"
            size={22}
            color="#fdba74"
            opacity={0.8}
          />
          <Text className="text-xs font-bold text-[#92400e]">{address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default RestaurantCardVertical;
