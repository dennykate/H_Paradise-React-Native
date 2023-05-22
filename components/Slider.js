import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Swiper from "react-native-swiper";
import { sliderData } from "../utils/data";

const Slider = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        loop={true}
        horizontal={true}
        dot={
          <View
            style={{
              backgroundColor: "#232526",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 3,
              marginBottom: 3,
            }}
          ></View>
        }
        activeDot={
          <View
            style={{
              backgroundColor: "red",
              width: 20,
              height: 6,
              borderRadius: 3,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        {sliderData.map((dt, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={async () => {
              try {
                await Linking.openURL(dt.url);
              } catch (error) {
                console.log(error);
              }
            }}
            key={index}
          >
            <Image
              source={{
                uri: dt.image,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: 250,
    alignSelf: "center",
    resizeMode: "cover",
  },
});

export default Slider;
