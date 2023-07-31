import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Home from "../../screens/Home";
import Messages from "../../screens/Messages";
import Colors from "../../constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function ProfileTopTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarGap: 26,

        tabBarStyle: {
          backgroundColor: "black",
          paddingLeft: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: Colors.darkGray,
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
          fontSize: 14,
          textTransform: "capitalize",
          marginHorizontal: 0,
        },
        tabBarItemStyle: {
          width: "auto",
          alignItems: "flex-start",
          paddingHorizontal: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.primary,
          height: 3,
          borderEndEndRadius: 20,
        },
        tabBarIndicatorContainerStyle: {
          marginLeft: 10,
        },
        tabBarActiveTintColor: "#d5d8db",
        tabBarInactiveTintColor: "#71767B",
      }}
    >
      <Tab.Screen name="Tweets" component={Home} />
      <Tab.Screen name="Replies" component={Messages} />
      <Tab.Screen name="Highlights" component={Messages} />
      <Tab.Screen name="Media" component={Messages} />
      <Tab.Screen name="Likes" component={Messages} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
