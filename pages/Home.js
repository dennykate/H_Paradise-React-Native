import { View, Text, StatusBar, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../helper/config";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import VideoSlider from "../components/VideoSlider";
import { categories } from "../utils/data";
import BannerAds from "../components/BannerAds";
import { fetchTags } from "../helper/functions";

const Home = ({ navigation }) => {
  return (
    <View className="flex-1">
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <ScrollView className="pb-[10px]">
      <Navbar />
        <Slider />

        <BannerAds margin="mb-5" />

        {categories.map((category, index) => (
          <VideoSlider
            key={index}
            navigation={navigation}
            category={category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
