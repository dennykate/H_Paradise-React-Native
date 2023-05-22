import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchTags } from "../helper/functions";
import Loading from "../components/Loading";
import VideoSlider from "../components/VideoSlider";
import BannerAds from "../components/BannerAds";

const Tags = ({ navigation }) => {
  const [tagData, setTagData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAllTags();
  }, []);

  const fetchAllTags = async () => {
    setIsLoading(true);
    setTagData([]);
    const { tags, total } = await fetchTags();

    const randomTags = [];

    for (let i = 0; i < 10; i++) {
      const tag = tags[Math.floor(Math.random() * total)];

      randomTags.push(tag);
    }

    setTagData(randomTags);
    setIsLoading(false);
  };

  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" />

      <View className="h-[61px] w-full flex justify-center items-center bg-white">
        <Text className="text-lg font-medium">Tags</Text>
      </View>

      <ScrollView className="mb-[70px] px-[5px]">
        <View>
          <BannerAds />
        </View>

        {isLoading && (
          <View className="w-full h-[400px] flex justify-center items-center">
            <Loading />
          </View>
        )}

        {tagData.length > 0 &&
          tagData.map((tag, index) => (
            <VideoSlider navigation={navigation} key={index} category={tag} />
          ))}

        {tagData.length > 0 && (
          <View className="pb-[16px] pt-[20px] w-full flex justify-center items-center">
            <View className="w-[145px] h-[50px] relative">
              <View
                className="w-[145px] h-[50px] absolute top-0 left-0 bg-black rounded-full translate-x-[5px]
             translate-y-[5px]"
              ></View>

              <TouchableOpacity
                onPress={fetchAllTags}
                activeOpacity={0.9}
                className="w-[145px] h-[50px] flex justify-center abosolute top-0 left-0 items-center
               bg-[#2F80ED] rounded-full"
              >
                <Text className="text-white font-bold text-base">
                  More Tags
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({});
