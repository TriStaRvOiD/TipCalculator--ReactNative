import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import {
  PaperProvider,
  DefaultTheme,
  MD3DarkTheme,
  Surface,
  IconButton,
} from "react-native-paper";
import { CustomCard, CustomTopAppBar, Spacer, TextInputField } from "./shared";

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

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <PaperProvider theme={themeData}>
        <CustomTopAppBar
          title={"Tip Calculator"}
          icon={themeData === MD3DarkTheme ? "weather-sunny" : "weather-night"}
          onSwitch={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />
        <Surface style={{ flex: 1, alignItems: "center" }}>
          <Spacer height={10} />
          <CustomCard
            mode={"contained"}
            width={Dimensions.get("window").width - 20}
            height={100}
            justification={"center"}
          >
            <Text style={{ color: textColor }}>Total per person</Text>
            <Text style={{ color: textColor }}>${totalPerPerson}</Text>
          </CustomCard>
          <Spacer height={10} />
          <CustomCard
            mode={"outlined"}
            width={Dimensions.get("window").width - 20}
            justification={"center"}
          >
            <CustomCard
              mode={"outlined"}
              flexDirection={"row"}
              width={Dimensions.get("window").width - 40}
              justification={"center"}
            >
              <TextInputField
                mode={"outlined"}
                type={"numeric"}
                label={"Bill Amount"}
                text={billAmount}
                onChangeText={(billAmount) => setBillAmount(billAmount)}
                width={Dimensions.get("window").width - 60}
              />
            </CustomCard>
            <Spacer height={10} />
            <CustomCard
              mode={"outlined"}
              flexDirection={"row"}
              width={Dimensions.get("window").width - 40}
              justification={"space-between"}
            >
              <Text style={{ color: textColor }}>Split</Text>
              <IconButton
                icon="minus"
                mode="outlined"
                size={20}
                onPress={() => {
                  if (split > 1) {
                    setSplit(split - 1);
                  }
                }}
              />
              <Text style={{ color: textColor }}>{split}</Text>
              <IconButton
                icon="plus"
                mode="outlined"
                size={20}
                onPress={() => setSplit(split + 1)}
              />
            </CustomCard>
            <Spacer height={10} />
            <CustomCard
              mode={"outlined"}
              flexDirection={"row"}
              width={Dimensions.get("window").width - 40}
              justification={"space-between"}
            >
              <Text style={{ color: textColor }}>Tip</Text>
              <Text style={{ color: textColor }}>₹{tip}</Text>
            </CustomCard>
            <Spacer height={10} />
            <Text style={{ color: textColor }}>{Math.floor(sliderValue)}%</Text>
            <Spacer height={10} />
            <Slider
              width={Dimensions.get("window").width - 40}
              maximumValue={100}
              value={sliderValue}
              onValueChange={(sliderValue) => setSliderValue(sliderValue)}
            />
          </CustomCard>
        </Surface>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
