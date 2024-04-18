import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { basketItemsSelector } from "../../storeFolder/basketSlice";
import { useNavigation } from "@react-navigation/native";

function BasketIcon() {
  const basketItems = useSelector(basketItemsSelector);
  const navigation = useNavigation();
  const ttlCost = basketItems.reduce((acc, el) => {
    acc += el.price;
    return acc;
  }, 0);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <Pressable
        onPress={() => navigation.navigate("Basket")}
        className="bg-red-800 p-4 mx-5 rounded-lg flex-row items-center space-x-1"
      >
        <View className=" bg-orange-100 rounded-xl">
          <Text className="text-red-900 font-extrabold text-xl  px-4 py-2">
            {basketItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-orange-100 font-extrabold text-lg text-center">
          Sepete Git
        </Text>
        <Text className="text-lg text-orange-100 font-extrabold">
          {ttlCost} TL
        </Text>
      </Pressable>
    </View>
  );
}

export default BasketIcon;
