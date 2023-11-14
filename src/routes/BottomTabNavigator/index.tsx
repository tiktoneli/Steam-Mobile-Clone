import { Config } from "../../../screens/Config";
import { Home } from "../../../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Octicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Home: {};
	News: {};
    Shield: {};
    Bell: {};
    Config: {};
};

export function BottomTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#202126", padding: 5, height: 60 },
        tabBarInactiveTintColor: "#7e868c",
        tabBarActiveTintColor: "#009dfe",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{ transform: [{ rotateY: "180deg" }] }}
              name="pricetag"
              size={30}
              color={color}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={30}
              color={color}
            />
          ),
        }}
        name="News"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-shield" size={30} color={color} />
          ),
        }}
        name="Shield"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="bell-fill" size={30} color={color} />
          ),
        }}
        name="Bell"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={35} color={color} />
          ),
        }}
        name="Config"
        component={Config}
      />
    </Tab.Navigator>
  );
}
