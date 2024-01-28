import * as React from "react";
import { TextInput } from "react-native-paper";

export default function TextInputField(props) {
  const { mode, type, label, text, onChangeText, width } = props;

  return (
    <TextInput
      style={{ width: width }}
      mode={mode}
      label={label}
      value={text}
      onChangeText={onChangeText}
      keyboardType={type}
    />
  );
}
