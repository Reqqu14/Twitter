import { Pressable, StyleSheet, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ProfileButton() {
  const navigation = useNavigation();
  function HandlePress() {
    navigation.openDrawer();
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={HandlePress}>
        <Image
          source={require("../assets/images/profilepic.png")}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
