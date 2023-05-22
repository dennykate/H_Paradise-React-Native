import { View, Text, ScrollView } from "react-native";
import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

const RelatedVideos = ({ navigation, relatedVideos }) => {
  return (
    <View className="py-[20px] w-full">
      <Text className="text-[18px] font-bold  p-[5px] pb-[10px] underline">
        More Like This
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {relatedVideos.map((video, index) => (
          <RelatedVideoCard key={index} data={video} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RelatedVideos;
