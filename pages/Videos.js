import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";

import VideoCard from "../components/VideoCard";
import {
  fetchVideos,
  fetchVideos_xgroovy,
  scrollToTop,
} from "../helper/functions";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";

const Videos = ({ route, navigation }) => {
  const scrollRef = useRef(null);
  const { title, url } = route.params;
  const adsCount = useSelector((state) => state.adsCount);
  console.log(adsCount);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    scrollToTop(scrollRef);
    fetchData();
  }, [url, page]);

  const fetchData = async () => {
    setData([]);

    const res = await fetchVideos_xgroovy(url + `/${page}`);

    setData(res);
  };

  return (
    <View className="flex-1 bg-[#f5f5f5]">
      <StatusBar animated={true} backgroundColor="#61dafb" />

      <View className="h-[61px] w-full flex justify-center items-center bg-white">
        <Text className="text-lg font-medium capitalize">{title}</Text>
      </View>

      <ScrollView ref={scrollRef}>
        <View className="flex items-center justify-center flex-wrap w-full mx-[10px] flex-row">
          {data.length > 0 ? (
            data?.map((dt, index) => (
              <VideoCard key={index} data={dt} navigation={navigation} all />
            ))
          ) : (
            <View className="w-full h-[400px] flex justify-center items-center">
              <Loading />
            </View>
          )}
        </View>

        <Pagination data={data} page={page} setPage={setPage} />
      </ScrollView>
    </View>
  );
};

export default Videos;
