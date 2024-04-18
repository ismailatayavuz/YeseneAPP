import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../../sanity";

function HeaderImgRestaurant({ imgUrl }) {
  const navigation = useNavigation();
  return (
    <View className="relative">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-full h-56 bg-gray-300 p-4"
      />
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute top-10 left-5 p-2 bg-[#ffedd5] rounded-full"
      >
        <Ionicons name="arrow-back" size={20} color="#991b1b" />
      </Pressable>
    </View>
  );
}

export default HeaderImgRestaurant;
