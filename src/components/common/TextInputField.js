import * as React from "react";
import { TextInput } from "react-native-paper";

const TextInputField = (props) => {
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
};

export default TextInputField;
