import { React, useState } from "react";

import { Text, View, Button } from "react-native";
import styles from "../styles/styles";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  timeout: 1000,
});

export const WeatherScreen = ({ navigation }) => {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const [error, setError] = useState(null);

  const onButtonClick = () => {
    axiosClient
      .get(
        "/weather?lat=55.7887&lon=49.1221&appid=2f7f80c1114987b2dc44d7657de5cd92&lang=ru&units=metric"
      )
      .then((response) => {
        setTemp(`Температура ${response.data.main.temp} ℃`);
        setWeather(`${response.data.weather[0].description}`);
        setWindSpeed(`Скорость ветра ${response.data.wind.speed} м/с`);
      })
      .catch((error) => {
        setTemp("Ошибка запроса. Повторите позже.");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Погода в Казани</Text>
        </View>
        <Button title="Загрузить" onPress={() => onButtonClick()} />
        <View style={{ height: 100 }}>
          <View style={{ display: "flex", gap: 10 }}>
            <Text>{temp}</Text>
            <Text>{weather}</Text>
            <Text>{windSpeed}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
