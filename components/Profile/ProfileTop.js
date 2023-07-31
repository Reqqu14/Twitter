import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function ProfileTop() {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.rightIcon}>
          <Pressable style={styles.backIcon}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </Pressable>
        </View>
        <View style={styles.leftIcons}>
          <Pressable style={styles.searchIcon}>
            <AntDesign name="search1" size={20} color="white" />
          </Pressable>
          <Pressable style={styles.menuIcon}>
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 155,
    backgroundColor: Colors.primary,
  },

  iconsContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },

  leftIcons: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  backIcon: {
    marginLeft: 15,
    backgroundColor: "rgba(15, 14, 14, 0.55)",
    padding: 5,
    alignItems: "center",
    borderRadius: 40,
  },
  searchIcon: {
    backgroundColor: "rgba(15, 14, 14, 0.55)",
    padding: 5,
    alignItems: "center",
    borderRadius: 40,
    marginHorizontal: 20,
  },
  menuIcon: {
    backgroundColor: "rgba(15, 14, 14, 0.55)",
    padding: 5,
    alignItems: "center",
    borderRadius: 40,
  },
});
