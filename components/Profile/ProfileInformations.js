import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function ProfileInformations() {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>Marcin Najman</Text>
      <Text style={styles.nickname}>@Najmanisko</Text>
      <Text style={styles.description}>
        Nie lubie krzysia wybielacza{" "}
        <Text style={styles.profileLink}>@Kstanowski</Text>
      </Text>
      <View style={styles.detailsWithIconContainer}>
        <Feather name="map-pin" size={15} color="rgba(244, 244, 244, 0.45)" />
        <Text style={styles.detailsText}>Warsaw, Poland</Text>
      </View>
      <View style={styles.detailsWithIconContainer}>
        <MaterialCommunityIcons
          name="balloon"
          size={15}
          color="rgba(244, 244, 244, 0.45)"
        />
        <Text style={styles.detailsText}>Born: 31 February 2000</Text>
      </View>
      <View style={styles.detailsWithIconContainer}>
        <AntDesign
          name="calendar"
          size={15}
          color="rgba(244, 244, 244, 0.45)"
        />
        <Text style={styles.detailsText}>Joined August 2019</Text>
      </View>
      <View style={styles.numbersContainer}>
        <Text style={styles.numbersText}>
          <Text style={styles.numbers}>600</Text> Following
        </Text>
        <View style={styles.numbersDetailsContainer}>
          <Text style={styles.numbersText}>
            <Text style={styles.numbers}>5666</Text> Followers
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  fullName: {
    color: "#d5d8db",
    fontSize: 24,
    fontWeight: "bold",
  },

  nickname: {
    color: "rgba(244, 244, 244, 0.45)",
    fontSize: 16,
  },

  description: {
    color: "#d5d8db",
    fontSize: 16,
    marginVertical: 10,
  },

  profileLink: {
    color: "#38A7F2",
  },

  detailsText: {
    color: "rgba(244, 244, 244, 0.45)",
    fontSize: 14,
    marginHorizontal: 5,
  },

  detailsWithIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },

  numbersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  numbersDetailsContainer: {
    marginHorizontal: 15,
  },

  numbersText: {
    color: "rgba(244, 244, 244, 0.45)",
    fontSize: 15,
  },

  numbers: {
    color: "#E7E9EA",
    fontSize: 15,
    fontWeight: "bold",
  },
});
