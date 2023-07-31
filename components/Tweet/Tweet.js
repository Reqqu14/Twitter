import { StyleSheet, View } from "react-native";
import React from "react";
import TweetTopic from "./TweetTopic";
import TweetContent from "./TweetContent";
import TweetUser from "./TweetUser";
import TweetActions from "./TweetActions";
import Colors from "../../constants/Colors";

export default function Tweet() {
  return (
    <View style={styles.tweetContainer}>
      <View style={styles.tweetInformationContainer}>
        <TweetUser />
        <View style={styles.tweetDetailsContainer}>
          <TweetTopic />
          <TweetContent />
          <TweetActions />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetInformationContainer: {
    flexDirection: "row",
    width: "80%",
    paddingTop: 15,
  },

  tweetDetailsContainer: {
    marginBottom: 15,
  },

  tweetContainer: {
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.darkGray,
  },
});
