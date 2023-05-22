import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { informationData } from "../utils/data";

const Information = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View className="flex-1 bg-[#f5f5f5]">
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View className="w-full h-[250px] flex justify-center items-center">
        <Image
          source={require("../assets/icon.png")}
          className="w-[151px] h-[151px] rounded-full"
        />
      </View>
      <View>
        {informationData.map(({ title, icon, url }, index) => (
          <TouchableOpacity
            onPress={() => handlePress(url)}
            key={index}
            activeOpacity={0.9}
            className="w-full px-[24px] bg-white py-[20px] border-b-[1px] border-[#f5f5f5] flex items-center
      flex-row"
          >
            <Ionicons name={icon} size={20} color="black" />
            <Text className="text-base font-semibold ml-[10px]">{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Information;
