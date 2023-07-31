import { StyleSheet, View, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ProfileButton from "../components/ProfileButton";
import Tweet from "../components/Tweet/Tweet";

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      headerLeft: () => <ProfileButton />,
    });
  }, [navigation]);

  const [list, setList] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={(itemData) => <Tweet />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },

  tweetActionsContainer: {
    paddingHorizontal: 15,
  },
});
