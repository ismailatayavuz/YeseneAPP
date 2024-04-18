import { Image, Pressable, Text, View } from "react-native";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

function CategoryCard({ imgUrl, title }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Category", {
          catName: title,
          catImg: imgUrl,
        })
      }
      className="relative mr-2 "
    >
      <View>
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="h-24 w-36 rounded-2xl bg-blue-200 "
        />
        <Text className="absolute bottom-1 left-2 text-orange-50 font-extrabold">
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default CategoryCard;
