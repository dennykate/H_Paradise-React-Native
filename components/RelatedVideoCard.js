import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const RelatedVideoCard = ({ navigation, data }) => {
  const showTitle =
    data.title.length > 40 ? data.title.substring(0, 40) + "..." : data.title;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", data)}
      className="w-[250px] h-[200px] pb-[12px] overflow-hidden mr-[10px]"
    >
      <Image
        source={{
          uri: data.thumbnail,
        }}
        className="w-full h-[180px] object-cover rounded-lg"
      />
      <Text className="text-[14px] font-[400] truncate mt-[1px]">
        {showTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default RelatedVideoCard;
