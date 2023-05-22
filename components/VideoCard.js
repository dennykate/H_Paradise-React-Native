import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const VideoCard = ({ navigation, data, all, category }) => {
  const showTitle =
    data.title.length > 25 ? data.title.substring(0, 25) + "..." : data.title;

  const width = all ? "w-[45%]" : "w-[170px]";

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", data)}
      activeOpacity={0.8}
      className={`${width} h-[140px]  overflow-hidden mr-[8px] mb-[10px]`}
    >
      <Image
        source={{
          uri: data.thumbnail,
        }}
        className={`w-full object-cover rounded-lg h-[121px]`}
      />
      <Text className="text-[14px] font-[400] truncate mt-[1px]">
        {showTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default VideoCard;
