import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function TweetTopic() {
  return (
    <View style={styles.tweetTopic}>
      <Text style={styles.author}>Marcin Najman</Text>
      <Text style={styles.nickname}>@Najmanisko</Text>
      <Text style={styles.time}>12 min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetTopic: {
    flexDirection: "row",
  },

  author: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#d5d8db",
  },

  nickname: {
    fontSize: 15,
    color: "rgba(244, 244, 244, 0.45)",
    marginHorizontal: 8,
  },

  time: {
    fontSize: 15,
    color: "rgba(244, 244, 244, 0.45)",
  },
});
