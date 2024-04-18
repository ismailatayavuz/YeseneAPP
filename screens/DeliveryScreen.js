import { View } from "react-native";
import { useSelector } from "react-redux";
import { restaurantSelector } from "../storeFolder/restaurantSlice";

import MapComponent from "../components/DeliveryScreenComponents/MapComponent";
import DeliveryHeader from "../components/DeliveryScreenComponents/DeliveryHeader";
import DeliveryBottom from "../components/DeliveryScreenComponents/DeliveryBottom";

function DeliveryScreen() {
  const restaurantInfo = useSelector(restaurantSelector);
  return (
    <View className="flex-1">
      <DeliveryHeader restaurantInfo={restaurantInfo} />
      <MapComponent restaurantInfo={restaurantInfo} />
      <DeliveryBottom restaurantInfo={restaurantInfo} />
    </View>
  );
}

export default DeliveryScreen;
