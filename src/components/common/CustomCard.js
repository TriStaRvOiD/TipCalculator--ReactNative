import * as React from "react";
import { Card } from "react-native-paper";

const CustomCard = (props) => {
  const { mode, flexDirection, width, height, justification, children } = props;
  return (
    <Card style={{ width: width, height: height }} mode={mode}>
      <Card.Content
        style={{
          flexDirection: flexDirection,
          width: width,
          height: height,
          alignItems: "center",
          justifyContent: justification,
        }}
      >
        {children}
      </Card.Content>
    </Card>
  );
};

export default CustomCard;
