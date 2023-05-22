import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  fetchVideos,
  fetchVideos_xgroovy,
  scrollToTop,
} from "../helper/functions";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import BannerAds from "../components/BannerAds";

const Search = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search !== "") {
      scrollToTop(scrollRef);
      handleSearch();
    }
  }, [page]);

  const initSearch = () => {
    handleSearch();
    setPage(1);
  };

  const handleSearch = async () => {
    if (search == "") return;
    setLoading(true);
    setData([]);
    const res = await fetchVideos_xgroovy(
      `https://xgroovy.com/search/${search}/${page}/`
    );

    setLoading(false);
    setData(res);
  };

  return (
    <View className="flex-1 bg-[#f5f5f5]">
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View
        className="flex flex-row items-center bg-transparent justify-center px-[5px] py-[10px] fixed top-0 left-0 
      gap-[5px] w-full "
      >
        <TextInput
          className="w-[85%] h-[51px] bg-white rounded px-[10px] text-sm"
          placeholder="Search videos"
          onChangeText={(text) => setSearch(text)}
          onEndEditing={initSearch}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={initSearch}
          className="w-[12%] h-[50px] flex justify-center items-center rounded bg-white"
        >
          <Ionicons name="search-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <BannerAds margin="mb-2" />

      {loading && (
        <View className="w-full h-[400px] flex justify-center items-center">
          <Loading />
        </View>
      )}

      <ScrollView ref={scrollRef}>
        <View className="flex items-center justify-center flex-wrap w-full m-[10px] flex-row">
          {data?.length > 0 &&
            data?.map((dt, index) => (
              <VideoCard key={index} data={dt} navigation={navigation} all />
            ))}
        </View>

        <Pagination data={data} page={page} setPage={setPage} />
      </ScrollView>
    </View>
  );
};

export default Search;
