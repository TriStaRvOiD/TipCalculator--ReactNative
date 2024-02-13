import { Text, Dimensions } from "react-native";

import CustomCard from "../../../common/CustomCard";

const TipCard = ({ textColor, tip }) => {
  return (
    <CustomCard
      mode={"outlined"}
      flexDirection={"row"}
      width={Dimensions.get("window").width - 40}
      justification={"space-between"}
    >
      <Text style={{ color: textColor }}>Tip</Text>
      <Text style={{ color: textColor }}>₹{tip}</Text>
    </CustomCard>
  );
};

export default TipCard;
