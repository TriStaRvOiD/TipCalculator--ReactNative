import { Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = ({ sliderValue, setSliderValue }) => {
  return (
    <Slider
      width={Dimensions.get("window").width - 40}
      maximumValue={100}
      value={sliderValue}
      onValueChange={(value) => setSliderValue(value)}
    />
  );
};

export default SliderComponent;
