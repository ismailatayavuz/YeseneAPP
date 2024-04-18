import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";

function OrderInfoComponent({ ttlCost }) {
  const navigation = useNavigation();
  return (
    <View className="p-5 bg-orange-50 space-y-4 mt-5">
      <View className="flex-row justify-between">
        <Text className="text-amber-800">Sepet Tutarı</Text>
        <Text className="text-amber-800">{ttlCost} TL</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-amber-800">Gönderim Ücreti</Text>
        <Text className="text-amber-800">15.99 TL</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-red-900  font-extrabold">
          Toplam Ödenecek Tutar
        </Text>
        <Text className="text-red-900 font-extrabold mb-4">
          {ttlCost + 15.99} TL
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("PreparingOrder")}
        className="bg-red-800  py-4 rounded-xl mx-24"
      >
        <Text className="text-orange-50 text-center  font-bold text-lg ">
          Sipariş Ver
        </Text>
      </Pressable>
    </View>
  );
}

export default OrderInfoComponent;
