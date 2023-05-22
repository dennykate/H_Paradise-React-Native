import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

import LoadingAnimation from "../assets/loading.json";

const Loading = () => {
  return (
    <Lottie source={LoadingAnimation} autoPlay loop className="w-[101px]" />
  );
};

export default Loading;
