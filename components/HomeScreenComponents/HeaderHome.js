import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Header() {
  return (
    <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
      <Image
        className="w-16 h-16 rounded-full"
        source={require("../../assets/homeHeaderImg.jpg")}
      />
      <View className="flex-1">
        <Text className="font-bold text-amber-800 text-xs">Yesene App</Text>
        <Text className="font-extrabold text-xl text-red-900">Hoşgeldin!</Text>
      </View>
      <Ionicons name="person-outline" size={35} color="#991b1b" />
    </View>
  );
}

export default Header;
