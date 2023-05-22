import { View, Text, Image } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View
      className="h-[60px] flex flex-row items-center w-screen px-[20px]
      bg-white gap-[5px]"
    >
      <Image
        source={require("../assets/icon.png")}
        className="w-[35px] h-[35px] rounded-full object-cover"
      />
      <View className="flex flex-row items-center gap-[5px] -translate-y-1">
        <Text className=" text-base font-medium">Horny</Text>
        <Text className=" text-base font-bold text-[#2F80ED]">Paradise </Text>
      </View>
    </View>
  );
};

export default Navbar;
