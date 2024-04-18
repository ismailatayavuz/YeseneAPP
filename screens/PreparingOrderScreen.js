import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { restaurantSelector } from "../storeFolder/restaurantSlice";

function PreparingOrderScreen({ navigation }) {
  const restaurantInfo = useSelector(restaurantSelector);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-orange-100 flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoader.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-48 w-48 "
      />
      <Animatable.Text
        animation="pulse"
        iterationCount="infinite"
        className="text-lg text-red-800 mt-20 mb-10 font-extrabold text-center"
      >
        {restaurantInfo.title} Tarafından Sipariş Onayı Bekleniyor...
      </Animatable.Text>

      <Progress.CircleSnail color={"#991b1b"} />
    </SafeAreaView>
  );
}

export default PreparingOrderScreen;
