import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TweetContent() {
  const navigation = useNavigation();

  function goToDetails() {
    navigation.navigate("TweetDetails");
  }

  return (
    <Pressable onPress={goToDetails}>
      <View>
        <Text style={styles.content}>
          Stanowski dojeżdża Natalię Janoszek, chce udowodnić, że nie jest
          znana. Krzysiu,gdybyś się nie wypromował na moich plecach też by cie
          nikt nie znał oprócz środowiska Fryzjera. Może wystarczy z
          dojeżdżaniem tej dziewczyny.Zachowujesz się jak psycho-sadysta. Zabiła
          kogoś na pasach?
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    color: "#d5d8db",
  },
});
