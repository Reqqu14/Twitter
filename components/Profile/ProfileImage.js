import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import React from "react";

export default function ProfileImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/najman.jpg")}
        style={styles.image}
      />
      <Pressable style={styles.editButtonContainer}>
        <Text style={styles.editButton}>Edit profile</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  image: {
    width: 75,
    height: 75,
    borderRadius: 100,
    position: "absolute",
    marginTop: -30,
    marginLeft: 20,
    borderWidth: 3,
    borderColor: "black",
  },

  editButtonContainer: {
    alignItems: "flex-end",
    marginRight: 5,
  },

  editButton: {
    color: "#E7E9EA",
    fontSize: 16,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "rgba(244, 244, 244, 0.35)",
    borderRadius: 30,
    padding: 3,
    paddingHorizontal: 15,
  },
});
