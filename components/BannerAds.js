import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-6875308288532623/5124726135";

const BannerAds = ({ margin }) => {
  return (
    <View className={`w-full flex justify-center items-center ${margin}`}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

export default BannerAds;

const styles = StyleSheet.create({});
