import * as React from "react";
import { Appbar } from "react-native-paper";

const CustomTopAppBar = (props) => {
  const { title, icon, onSwitch } = props;
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Appbar.Action icon={icon} onPress={onSwitch} />
    </Appbar.Header>
  );
};

export default CustomTopAppBar;
