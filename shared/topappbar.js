import * as React from "react";
import { Appbar } from "react-native-paper";

export default function CustomTopAppBar(props) {
  const { title, icon, onSwitch } = props;
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
      <Appbar.Action icon={icon} onPress={onSwitch} />
    </Appbar.Header>
  );
}
