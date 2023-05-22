import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { fetchVideos, fetchVideos_xgroovy } from "../helper/functions";
import { useState } from "react";
import Loading from "./Loading";

const VideoSlider = ({ category, navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    const res = await fetchVideos_xgroovy(category.url);

    setData(res);
  };

  const handleNavigate = () => {
    navigation.navigate("Videos", category);
  };

  return (
    <View className="mb-[10px]">
      <Text className=" font-medium text-lg text-black m-[5px] capitalize">
        {category.title}
      </Text>
      {data.length > 0 ? (
        <ScrollView
          className="mx-[10px]"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {data.slice(0, 10).map((dt, index) => (
            <VideoCard data={dt} key={index} navigation={navigation} />
          ))}

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleNavigate}
            className="w-[170px] h-[120px]"
          >
            <ImageBackground
              source={{
                uri: "https://i.postimg.cc/GpKP8HBJ/Heidi-Klum-Main.jpg",
              }}
              className="w-full h-full flex flex-row justify-center items-center rounded-lg overflow-hidden"
            >
              <View className="px-[12px] py-[4px] bg-red-500 rounded ">
                <Text className="text-sm text-white font-[600]">See More</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View className="mx-[10px] w-[170px] h-[120px] bg-gray-300 rounded-lg flex justify-center items-center">
          <Loading />
        </View>
      )}
    </View>
  );
};

export default VideoSlider;
