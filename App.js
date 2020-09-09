import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "ea86638fef02174d39cd0b5d803a4039";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [temp, setTemp] = useState();
  const [condition, setCondition] = useState("Clear");
  async function getWeather(latitude, longitude) {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ea86638fef02174d39cd0b5d803a4039&units=metric`
    );

    setLoading(false);
    setTemp(temp);
    setCondition(weather[0].main);
    console.log(weather);
  }
  async function getLocation() {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  );
}
