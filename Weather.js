import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#0F2027", "#203A43", "#2C5364"],
    title: "Thunderstrom",
    subtitle: "There's thunder and lightning outside.",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "Drizzle",
    subtitle: "It is expected to rain a little.",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#373B44", "#4286f4"],
    title: "Rain",
    subtitle: "Don't forget your umbrella.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Snow",
    subtitle: "Do you want to build a snowman?",
  },

  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#2980B9", "##6DD5FA"],
    title: "Clear",
    subtitle: "Sunny day. Let's go outside!!!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Clouds",
    subtitle: "Today is ver cloudy.",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "",
  },
  Mist: {
    iconName: "cloud-outline",
    gradient: ["#636363", "#a2ab58"],
    title: "Mist",
    subtitle: "",
  },
  Dust: {
    iconName: "mixcloud",
    gradient: ["#e9d362", "#333333"],
    title: "Dust",
    subtitle: "Just don't go outside.",
  },
  Smoke: {
    iconName: "smog",
    gradient: ["#304352", "#d7d2cc"],
    title: "Smoke",
    subtitle: "",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#283048", "#859398"],
    title: "Fog",
    subtitle: "A foggy day",
  },
  Sand: {
    iconName: "weather-cloudy-arrow-right",
    gradient: ["#BA8B02", "#181818"],
    title: "Sand",
    subtitle: "Just don't go outside.",
  },

  Ash: {
    iconName: "fire",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Ash",
    subtitle: "Just don't go outside.",
  },
  Squall: {
    iconName: "weather-windy-variant",
    gradient: ["#4b6cb7", "#182848"],
    title: "Squall",
    subtitle: "Watch out for the wind.",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#16222A", "#3A6073"],
    title: "Tornado",
    subtitle: "Be careful",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={86}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Dirzzle",
    "Rain",
    "Snow",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
