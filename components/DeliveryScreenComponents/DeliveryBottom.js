import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../../sanity";

function DeliveryBottom({ restaurantInfo }) {
  return (
    <SafeAreaView className="flex-row items-center bg-orange-50 h-36 space-x-2">
      <Image
        source={{ uri: urlFor(restaurantInfo.imgUrl).url() }}
        className="h-16 w-16 rounded-full ml-4"
      />
      <View className="flex-1">
        <Text className="text-lg font-extrabold text-red-900">
          {restaurantInfo.title}
        </Text>
        <Text className="text-amber-800 font-semibold">
          {restaurantInfo.address}
        </Text>
      </View>
      <Pressable className="flex-row items-center space-x-2">
        <Ionicons name="call" size={24} color="#991b1b" />
        <Text className="text-2xl font-bold text-red-800 mr-10">Ara</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default DeliveryBottom;
