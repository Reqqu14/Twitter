import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfileImage from "../components/Profile/ProfileImage";
import ProfileInformations from "../components/Profile/ProfileInformations";
import ProfileTopTabNavigation from "../components/Profile/ProfileTopTabNavigation";

export default function ProfileDetails() {
  return (
    <View style={styles.container}>
      <ProfileTop />
      <ProfileImage />
      <ProfileInformations />
      <ProfileTopTabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
