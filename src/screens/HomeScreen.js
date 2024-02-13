import React from "react";
import { PaperProvider, Surface } from "react-native-paper";

import Spacer from "../components/common/Spacer";
import HomeTopAppBar from "../components/home/HomeTopAppBar";
import TotalPerPersonCard from "../components/home/cards/TotalPerPersonCard";
import TipCalculatorCard from "../components/home/cards/tip-calculator-card/TipCalculatorCard";

const HomeScreen = ({
  themeData,
  toggleTheme,
  textColor,
  totalPerPerson,
  billAmount,
  setBillAmount,
  split,
  setSplit,
  tip,
  sliderValue,
  setSliderValue,
}) => {
  return (
    <PaperProvider theme={themeData}>
      <HomeTopAppBar themeData={themeData} toggleTheme={toggleTheme} />
      <Surface style={{ flex: 1, alignItems: "center" }}>
        <Spacer height={10} />
        <TotalPerPersonCard
          textColor={textColor}
          totalPerPerson={totalPerPerson}
          billAmount={billAmount}
        />
        <Spacer height={10} />
        <TipCalculatorCard
          textColor={textColor}
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          split={split}
          setSplit={setSplit}
          tip={tip}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
      </Surface>
    </PaperProvider>
  );
};

export default HomeScreen;
