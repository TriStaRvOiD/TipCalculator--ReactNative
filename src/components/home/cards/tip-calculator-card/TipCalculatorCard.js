import { Text, Dimensions } from "react-native";

import { CustomCard, Spacer } from "../../../common";
import { BillAmountCard, SplitCard, TipCard, SliderComponent } from ".";

const TipCalculatorCard = ({
  textColor,
  billAmount,
  setBillAmount,
  split,
  setSplit,
  tip,
  sliderValue,
  setSliderValue,
}) => {
  return (
    <CustomCard
      mode={"outlined"}
      width={Dimensions.get("window").width - 20}
      justification={"center"}
    >
      <BillAmountCard billAmount={billAmount} setBillAmount={setBillAmount} />
      <Spacer height={10} />
      <SplitCard textColor={textColor} split={split} setSplit={setSplit} />
      <Spacer height={10} />
      <TipCard textColor={textColor} tip={tip} />
      <Spacer height={10} />
      <Text style={{ color: textColor }}>{Math.floor(sliderValue)}%</Text>
      <Spacer height={10} />
      <SliderComponent
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
      />
    </CustomCard>
  );
};

export default TipCalculatorCard;
