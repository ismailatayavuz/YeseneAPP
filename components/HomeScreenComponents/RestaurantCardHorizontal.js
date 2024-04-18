import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../../sanity";

function RestaurantCardHorizontal({
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
      className="bg-orange-50 shadow-sm shadow-gray-400 mr-3 rounded-[40px] mt-2 mb-3"
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
        className="h-36 w-64 rounded-t-[40px] "
      />
      <View className="px-3 pb-4 w-64">
        <Text className="text-2xl font-extrabold text-red-900 pt-2 ">
          {title}
        </Text>
        <View className="flex-row items-center space-x-1 mb-4">
          <Ionicons name="star" size={24} color="#f59e0b" />
          <Text className="text-[#f59e0b] text-lg font-extrabold">
            {rating}/5
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

export default RestaurantCardHorizontal;
