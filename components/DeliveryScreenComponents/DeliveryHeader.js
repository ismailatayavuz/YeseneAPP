import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

function DeliveryHeader({ restaurantInfo }) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      className="flex-1"
      source={require("../../assets/bckgrnd.jpg")}
      resizeMode="cover"
    >
      <SafeAreaView className="flex-1">
        <View className="flex-row items-center justify-between p-5">
          <Ionicons
            onPress={() => navigation.navigate("Home")}
            name="close"
            size={32}
            color="#ffedd5"
          />
          <Text className="text-orange-100 text-xl font-semibold">Yardım</Text>
        </View>
        <View className="bg-orange-50 mx-6 px-6 py-6 mt-[75px] rounded-[55px] shadow-lg shadow-gray-800">
          <View className="flex-row space-x-5">
            <View>
              <Text className="text-lg font-semibold text-amber-800">
                Tahmini Varış Süresi
              </Text>
              <Text className="text-4xl font-extrabold text-red-900">
                35-45 Dakika
              </Text>
            </View>
            <Image
              source={require("../../assets/delivery.jpg")}
              className="h-20 w-20 rounded-full"
            />
          </View>
          <Progress.Bar size={30} color="#991b1b" indeterminate={true} />
          <Text className="mt-3 text-orange-800 font-semibold">
            Siparişin{" "}
            <Text className="font-extrabold">{restaurantInfo.title}</Text>{" "}
            Tarafından Hazırlanıyor
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default DeliveryHeader;
