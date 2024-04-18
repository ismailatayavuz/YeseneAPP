import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../../sanity";

function HeaderCategory({ catImg, catName, catLength }) {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={{ uri: urlFor(catImg).url() }} className="w-full h-64 " />
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute top-10 left-5 p-2 bg-[#ffedd5] rounded-full"
      >
        <Ionicons name="arrow-back" size={20} color="#991b1b" />
      </Pressable>
      <View className="bg-red-800 py-2 mx-3 my-8 rounded-2xl">
        <Text className="text-3xl text-orange-100 text-center">{catName}</Text>
      </View>
      <Text className=" pl-5 pb-2 text-red-800 font-bold">
        {catLength} Adet Restoran Bulundu:
      </Text>
    </View>
  );
}

export default HeaderCategory;
