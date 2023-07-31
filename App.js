import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Notifications from "./screens/Notifications";
import Messages from "./screens/Messages";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import TweetDetails from "./screens/TweetDetails";
import Settings from "./screens/Settings";
import Colors from "./constants/Colors";
import { TransitionPresets } from "@react-navigation/stack";
import ProfileDetails from "./screens/ProfileDetails";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "black",
        drawerInactiveBackgroundColor: "black",
        drawerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Drawer.Screen name="HomeStackGroup" component={StackNavigation} />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "black" },
        headerTitle: () => (
          <FontAwesome name="twitter" size={32} color={Colors.primary} />
        ),
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Messages") {
            iconName = focused ? "envelope" : "envelope-o";
            return <FontAwesome name={iconName} size={size} color="white" />;
          }

          return <Ionicons size={size} name={iconName} color="white" />;
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderColor: "black",
        },

        headerShadowVisible: false,
        tabBarShowLabel: false,
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarLabel: "@tlosek" }}
      />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Notifications" component={Notifications} />
      <BottomTab.Screen name="Messages" component={Messages} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
