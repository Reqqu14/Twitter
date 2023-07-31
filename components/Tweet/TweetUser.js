import { StyleSheet, Image, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TweetUser() {
  const navigation = useNavigation();

  function GoToProfileDetails() {
    navigation.navigate("ProfileDetails");
  }

  return (
    <View style={styles.imageContainer}>
      <Pressable onPress={GoToProfileDetails}>
        <Image
          source={require("../../assets/images/najman.jpg")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "column",
    width: "20%",
    marginLeft: 8,
    marginTop: 5,
  },

  image: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});
