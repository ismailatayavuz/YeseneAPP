import { SafeAreaView, View } from "react-native";
import { useEffect, useState } from "react";

import { restaurantSelector } from "../storeFolder/restaurantSlice";
import { useSelector } from "react-redux";
import { basketItemsSelector } from "../storeFolder/basketSlice";

import BasketBody from "../components/BasketScreenComponents/BasketBody";
import OrderInfoComponent from "../components/BasketScreenComponents/OrderInfoComponent";
import BasketHeader from "../components/BasketScreenComponents/BasketHeader";

function BasketScreen() {
  const restaurantInfo = useSelector(restaurantSelector);
  const basketItems = useSelector(basketItemsSelector);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const ttlCost = basketItems.reduce((acc, el) => {
    acc += el.price;
    return acc;
  }, 0);

  useEffect(() => {
    const groupedItems = basketItems.reduce((acc, el) => {
      (acc[el.id] = acc[el.id] || []).push(el);
      return acc;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [basketItems]);

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <View className="flex-1 bg-orange-100">
        <BasketHeader basketItems={basketItems} />
        <BasketBody
          restaurantInfo={restaurantInfo}
          groupedItemsInBasket={groupedItemsInBasket}
        />
        <OrderInfoComponent ttlCost={ttlCost} />
      </View>
    </SafeAreaView>
  );
}

export default BasketScreen;
