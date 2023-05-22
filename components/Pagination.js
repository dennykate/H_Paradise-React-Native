import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Pagination = ({ data, page, setPage }) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      {data?.length > 0 && (
        <View className="w-screen  h-[80px] flex flex-row justify-evenly items-center ">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handlePrev}
            className="px-[35px] py-[12px] rounded-full flex flex-row items-center  bg-[#2F80ED] "
          >
            <MaterialCommunityIcons
              name="chevron-left"
              color="white"
              size={26}
            />
            <Text className="font-medium text-white text-[17px]">Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleNext}
            className="px-[35px] py-[12px] rounded-full flex flex-row items-center  bg-[#2F80ED] "
          >
            <Text className="font-medium text-white text-[17px]">Next</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              color="white"
              size={26}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Pagination;

const styles = StyleSheet.create({});
