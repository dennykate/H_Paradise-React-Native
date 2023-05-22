import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Storage } from "expo-storage";
import "expo-dev-client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider } from "react-redux";
import { store } from "../feature/store";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Information from "../pages/Information";
import Detail from "../pages/Detail";
import Videos from "../pages/Videos";
import Tags from "../pages/Tags";
import Auth from "../pages/Auth";
import Loading from "../components/Loading";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAlreadyLogin, setIsAlreadyLogin] = useState(false);

  useEffect(() => {
    varifyAlreadyLogin();
  }, []);

  const varifyAlreadyLogin = async () => {
    setIsLoading(true);
    const code = await Storage.getItem({ key: "code" });

    if (code !== null) {
      setIsAlreadyLogin(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 22,
          backgroundColor: "white",
        }}
      >
        <Loading />
        <Text style={{ alignSelf: "center", color: "black" }}>
          Loading... Please Wait
        </Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAlreadyLogin ? "Main" : "Auth"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={BottomNavigation} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Videos" component={Videos} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#e91e63">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarLabel: "Tags",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tag-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-search"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarLabel: "Information",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
