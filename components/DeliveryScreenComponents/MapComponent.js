import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapComponent({ restaurantInfo }) {
  const region = {
    latitude: restaurantInfo.lat,
    longitude: restaurantInfo.long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View className="flex-1 border-b-2 border-red-900">
      <MapView className="flex-1" initialRegion={region}>
        <Marker
          title={restaurantInfo.title}
          description={restaurantInfo.short_description}
          coordinate={{
            latitude: restaurantInfo.lat,
            longitude: restaurantInfo.long,
          }}
          identifier="origin"
          pinColor="#991b1b"
        />
      </MapView>
    </View>
  );
}

export default MapComponent;
