import { Text, Dimensions } from "react-native";

import CustomCard from "../../common/CustomCard";

const TotalPerPersonCard = ({ textColor, totalPerPerson }) => {
  return (
    <CustomCard
      mode={"contained"}
      width={Dimensions.get("window").width - 20}
      height={100}
      justification={"center"}
    >
      <Text style={{ color: textColor }}>Total per person</Text>
      <Text style={{ color: textColor }}>${totalPerPerson}</Text>
    </CustomCard>
  );
};

export default TotalPerPersonCard;
