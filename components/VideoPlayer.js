import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Video } from "expo-av";
import Lottie from "lottie-react-native";

import Loading from "../assets/loading.json";

const VideoPlayer = ({ video, thumbnail, isVideoLoaded, setIsVideoLoaded }) => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const playHandler = () => {
    if (!isVideoLoaded) return;

    setShowVideo(true);
    videoRef.current.playAsync();
  };

  return (
    <View className="w-full h-[250px] relative">
      <Video
        ref={videoRef}
        source={{
          uri: video,
        }}
        className="w-full h-full "
        useNativeControls={true}
        resizeMode="contain"
        isLooping={true}
        onPlaybackStatusUpdate={(status) => {
          setIsVideoLoaded(status.isLoaded);
        }}
      />
      {!showVideo && (
        <>
          <Image
            source={{
              uri: thumbnail,
            }}
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <View className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            <TouchableOpacity
              onPress={playHandler}
              activeOpacity={1}
              className="w-[71px] h-[71px] flex justify-center items-center rounded-full bg-[#2F80ED]"
            >
              {isVideoLoaded ? (
                <Ionicons name="play-outline" size={30} color="white" />
              ) : (
                <Lottie autoPlay loop source={Loading} className="w-[50px]" />
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default VideoPlayer;
