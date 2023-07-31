import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function TweetActions() {
  return (
    <View style={styles.actionsContainer}>
      <View style={styles.action}>
        <FontAwesome name="comment-o" size={16} color={Colors.lightGray} />
        <Text style={styles.actionText}>16</Text>
      </View>
      <View style={styles.action}>
        <AntDesign name="retweet" size={16} color={Colors.lightGray} />
        <Text style={styles.actionText}>0</Text>
      </View>
      <View style={styles.action}>
        <AntDesign name="hearto" size={16} color={Colors.lightGray} />
        <Text style={styles.actionText}>5</Text>
      </View>
      <View style={styles.action}>
        <Entypo name="bar-graph" size={16} color={Colors.lightGray} />
        <Text style={styles.actionText}>1612</Text>
      </View>
      <View style={styles.action}>
        <AntDesign name="sharealt" size={16} color={Colors.lightGray} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  action: {
    flexDirection: "row",
  },

  actionText: {
    marginLeft: 5,
    fontSize: 12,
    textAlign: "center",
    color: Colors.lightGray,
  },
});
