import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import RelatedVideos from "../components/RelatedVideos";
import VideoPlayer from "../components/VideoPlayer";
import {
  fetchDetail,
  fetchDetail_xgroovy,
  scrollToTop,
} from "../helper/functions";
import Loading from "../components/Loading";
import { initInterstitialAds, initRewardAds } from "../helper/adsFunctions";
import BannerAds from "../components/BannerAds";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount } from "../feature/service/adsSlice";
// import { dummyDetailData } from "../utils/dummyData";

const Detail = ({ navigation, route }) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const adsCount = useSelector((state) => state.adsCount);
  const { link, thumbnail } = route.params;

  const [data, setData] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    scrollToTop(scrollRef);
    fetchData();
    // initInterstitialAds();
    // checkCountAndInitAds();
  }, [route.params]);

  const checkCountAndInitAds = () => {
    console.log(adsCount);

    dispatch(increaseAmount());
    if (!(adsCount.reward % 5)) initRewardAds();
  };

  const fetchData = async () => {
    setData(null);
    const res = await fetchDetail_xgroovy(link);

    setData(res);
  };

  const handleDownload = () => {
    Linking.openURL(data.video);
  };

  const description =
    data?.description.length > 300
      ? data?.description.substring(0, 300) + "..."
      : data?.description;

  return (
    <>
      {data === null ? (
        <View className="flex-1 flex justify-center items-center">
          <Loading />
        </View>
      ) : (
        <ScrollView ref={scrollRef} className="flex-1 bg-[#f5f5f5]">
          <StatusBar animated={true} backgroundColor="#61dafb" />
          <VideoPlayer
            video={data?.video}
            thumbnail={thumbnail}
            isVideoLoaded={isVideoLoaded}
            setIsVideoLoaded={setIsVideoLoaded}
          />

          <BannerAds margin="my-5" />

          <View className="py-[21px] px-[5px] flex flex-col gap-[6px] items-start">
            <Text className=" text-lg font-extrabold text-black">
              {data?.title}
            </Text>
            <View className="flex items-center gap-[8px] flex-row">
              <Ionicons name="calendar-outline" size={20} color="black" />
              <Text className="text-base font-semibold text-black">
                {data?.releaseDate}
              </Text>
            </View>
            <View className="flex items-center gap-[8px] flex-row">
              <Ionicons name="alarm-outline" size={20} color="black" />
              <Text className="text-base font-semibold text-black">
                {data?.duration}
              </Text>
            </View>

            <View className="py-[5px] flex items-start gap-[5px]">
              {data?.otherData?.map((dt, index) => (
                <View key={index}>
                  <Text className="text-[18px] font-bold">{dt.title}</Text>
                  <Text className="ml-[5px] text-base font-normal text-gray-800">
                    {dt.name}
                  </Text>
                </View>
              ))}
            </View>

            <View className="py-[5px] flex items-start gap-[5px]">
              <View>
                <Text className="text-[18px] font-bold">Categories</Text>
                <View className="flex flex-row items-center gap-[5px] pt-[10px] flex-wrap">
                  {data?.categories.map((category, index) => (
                    <View
                      key={index}
                      className="px-[8px] py-[3px] bg-gray-500 rounded bg-opacity-10 "
                    >
                      <Text className="text-[11px] font-normal text-white">
                        {category}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View className="pb-[16px] pt-[20px] w-full flex justify-center items-center">
              <View className="w-[145px] h-[50px] relative">
                <View
                  className="w-[145px] h-[50px] absolute top-0 left-0 bg-black rounded-full translate-x-[5px]
             translate-y-[5px]"
                ></View>
                {isVideoLoaded ? (
                  <TouchableOpacity
                    onPress={handleDownload}
                    activeOpacity={0.9}
                    className="w-[145px] h-[50px] flex justify-center abosolute top-0 left-0 items-center
               bg-[#2F80ED] rounded-full"
                  >
                    <Text className="text-white font-bold text-base">
                      Download
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    className="w-[145px] h-[50px] flex justify-center abosolute top-0 left-0 items-center
              bg-[#2F80ED] rounded-full"
                  >
                    <Text className="text-white font-bold text-base">
                      Loading ...
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View className="py-[5px] flex items-start gap-[5px]">
              <View>
                <Text className="text-[18px] font-bold underline">
                  Description
                </Text>
                <Text className="text-base font-normal text-gray-800 pt-[3px]">
                  {description}
                </Text>
              </View>
            </View>

            <RelatedVideos
              relatedVideos={data?.relatedVideos}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Detail;
