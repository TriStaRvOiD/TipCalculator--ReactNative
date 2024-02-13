import { Text, Dimensions } from "react-native";
import { IconButton } from "react-native-paper";

import CustomCard from "../../../common/CustomCard";

const SplitCard = ({ textColor, split, setSplit }) => {
  return (
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
  );
};

export default SplitCard;
