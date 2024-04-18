import { Text, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  basketItemsSelector,
  removeFromBasket,
} from "../../storeFolder/basketSlice";

function IncreaseDecreaseFunctionality({
  id,
  name,
  description,
  price,
  image,
}) {
  const dispatch = useDispatch();
  const basketItems = useSelector(basketItemsSelector);
  const individualItem = basketItems.filter((el) => el.id === id).length;
  const width = useWindowDimensions().width;
  function addItemToBasket() {
    dispatch(addToBasket({ id, name, description, price, image }));
  }
  function removeItemFromBasket() {
    dispatch(removeFromBasket({ id }));
  }
  return (
    <View
      style={{ paddingLeft: width / 3 }}
      className="flex-row items-center space-x-2 bg-orange-50 pb-3 border-b-2 border-orange-100"
    >
      <Ionicons
        name="remove-circle"
        size={40}
        color={individualItem ? "#991b1b" : "#9ca3af"}
        opacity={0.8}
        onPress={removeItemFromBasket}
        disabled={!individualItem}
      />
      <Text>{individualItem}</Text>
      <Ionicons
        name="add-circle"
        size={40}
        color="#991b1b"
        opacity={0.8}
        onPress={addItemToBasket}
      />
    </View>
  );
}

export default IncreaseDecreaseFunctionality;
