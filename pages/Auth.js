import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Storage } from "expo-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Loading from "../components/Loading";

const Auth = ({ navigation }) => {
  const [passCode, setPassCode] = useState("");

  const handleOnChangeText = (e) => {
    setPassCode(e);

    if (e === "၅၅၅၅၅") {
      navigation.navigate("Main");
      handleLoginSave();
    }
  };

  const handleLoginSave = async () => {
    await Storage.setItem({
      key: "code",
      value: "already login",
    });
  };

  return (
    <View className=" w-screen h-screen">
      <StatusBar animated={true} backgroundColor="#61dafb" />

      <View className=" p-[3px]">
        <View className="w-full h-[50px] flex flex-row justify-between">
          <TextInput
            value={passCode}
            onChangeText={handleOnChangeText}
            placeholder="Paste your link in here"
            className="w-[85%] h-full rounded-l-md border-[1px] border-[#00000052] px-[12px]"
          />

          <TouchableOpacity
            className="w-[14%] h-[50px] rounded-r-md border-[1px] border-[#00000052] flex
             justify-center items-center"
          >
            <MaterialCommunityIcons
              name="download-circle-outline"
              color="black"
              size={26}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full h-[500px] flex justify-center items-center">
        <View className="w-[300px] h-[150px] rounded-md overflow-hidden">
          <Image
            source={require("../assets/notice.png")}
            className="w-full h-full "
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.9}
        className=" absolute bottom-12 right-2 w-[60px] h-[60px] bg-[#2F80ED] flex justify-center items-center
         rounded-full"
      >
        <MaterialCommunityIcons name="file-download" color="white" size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
