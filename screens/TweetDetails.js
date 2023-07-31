import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

export default function TweetDetails({ navigation }) {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
  }, []);
  return (
    <View>
      <Text>TweetDetails</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
