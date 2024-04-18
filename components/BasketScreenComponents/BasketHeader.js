import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function BasketHeader({ basketItems }) {
  const navigation = useNavigation();

  return (
    <View className="p-5  bg-orange-50 shadow-xs ">
      <View>
        <View className="flex-row items-center justify-center space-x-1">
          <Text className="text-2xl font-extrabold text-red-900 ">Sepetin</Text>
          <Entypo name="shopping-basket" size={28} color="#7f1d1d" />
        </View>
        <Text className="text-center text-md font-bold text-amber-800 mt-2">
          (Toplam {basketItems.length} Adet Ürün)
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute top-3 right-4"
      >
        <Ionicons name="close-circle" size={40} color="#991b1b" />
      </Pressable>
    </View>
  );
}

export default BasketHeader;
