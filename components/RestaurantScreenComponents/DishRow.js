import { Image, Pressable, Text, View } from "react-native";
import { urlFor } from "../../sanity";
import { useState } from "react";

import IncreaseDecreaseFunctionality from "./IncreaseDecreaseFunctionality";

function DishRow({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => setIsPressed((el) => !el)}
        className={`bg-orange-50 p-4 ${
          !isPressed && "border-b-2 border-orange-100"
        }`}
      >
        <View className="flex-row space-x-3">
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-24 w-24 rounded-3xl"
          />
          <View className=" pl-2 flex-1">
            <Text className="text-lg mb-1 text-red-900 font-bold">{name}</Text>
            <Text className="text-amber-800 mb-2">{description}</Text>
            <Text className="text-amber-800">{price} TL</Text>
          </View>
        </View>
      </Pressable>
      {isPressed && (
        <IncreaseDecreaseFunctionality
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
        />
      )}
    </>
  );
}

export default DishRow;
