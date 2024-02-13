import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { DefaultTheme, MD3DarkTheme } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [themeData, setThemeData] = useState(DefaultTheme);
  const textColor = theme === "light" ? "black" : "white";

  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [billAmount, setBillAmount] = useState("0");
  const [split, setSplit] = useState(1);
  const [tip, setTip] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);

  useEffect(() => {
    const currentTheme = theme === "light" ? DefaultTheme : MD3DarkTheme;
    setThemeData(currentTheme);
  }, [theme]);

  useEffect(() => {
    const calculatedTip =
      (parseInt(billAmount, 10) * Math.floor(sliderValue)) / 100;
    setTip(calculatedTip);

    const calculatedTotalPerPerson =
      (calculatedTip + parseInt(billAmount, 10)) / split;
    setTotalPerPerson(calculatedTotalPerPerson);
  }, [billAmount, sliderValue, split]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <HomeScreen
        themeData={themeData}
        toggleTheme={handleThemeChange}
        textColor={textColor}
        totalPerPerson={totalPerPerson}
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        split={split}
        setSplit={setSplit}
        tip={tip}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
    </SafeAreaProvider>
  );
}
