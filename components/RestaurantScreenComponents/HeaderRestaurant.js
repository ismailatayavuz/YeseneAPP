import { Text, View } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { useSelector } from "react-redux";
import { restaurantSelector } from "../../storeFolder/restaurantSlice";

import HeaderImgRestaurant from "./HeaderImgRestaurant";

function HeaderRestaurant({ imgUrl }) {
  const restaurantInfo = useSelector(restaurantSelector);
  return (
    <>
      <HeaderImgRestaurant imgUrl={imgUrl} />

      <View className="bg-orange-50  px-4 pt-2">
        <View className="flex-row items-center">
          <Text className="text-3xl text-red-900 font-extrabold">
            {restaurantInfo.title}
          </Text>
          {restaurantInfo.short_description && (
            <>
              <Entypo name="dot-single" size={28} color="#7f1d1d" />
              <Text className="text-amber-800 font-bold">
                {restaurantInfo.short_description}
              </Text>
            </>
          )}
        </View>
        <View className="flex-row items-center space-x-1 mb-2">
          <Ionicons name="star" size={24} color="#f59e0b" />
          <Text className="text-[#f59e0b] text-lg font-extrabold">
            {restaurantInfo.rating}/5
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="fast-food" size={22} color="#fdba74" opacity={0.8} />
          <Text className="text-xs font-bold text-[#92400e]">
            {restaurantInfo.genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 my-1">
          <Ionicons
            name="location-sharp"
            size={22}
            color="#fdba74"
            opacity={0.7}
          />
          <Text className="text-xs font-bold text-amber-800">
            {restaurantInfo.address}
          </Text>
        </View>
      </View>
    </>
  );
}

export default HeaderRestaurant;
