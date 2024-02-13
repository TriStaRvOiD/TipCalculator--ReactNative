import React from "react";
import { Dimensions } from "react-native";

import { CustomCard, TextInputField } from "../../../common/";

const BillAmountCard = ({ billAmount, setBillAmount }) => {
  return (
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
        onChangeText={(value) => setBillAmount(value)}
        width={Dimensions.get("window").width - 60}
      />
    </CustomCard>
  );
};

export default BillAmountCard;
