import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View className="flex-row items-center pb-2 mx-4 space-x-2">
      <View className="flex-row flex-1 bg-orange-50 p-3  space-x-2 rounded-full border border-[#991b1b]">
        <Ionicons name="search" size={20} color="#92400e" />
        <TextInput
          placeholder="Restoran veya yemek arayın"
          keyboardType="default"
          placeholderTextColor="#92400e"
        />
      </View>

      <View className="bg-[#991b1b] p-2 rounded-full">
        <Ionicons name="options" size={20} color="#fff7ed" />
      </View>
    </View>
  );
}

export default SearchBar;
