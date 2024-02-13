import { MD3DarkTheme } from "react-native-paper";

import CustomTopAppBar from "../common/CustomTopAppBar";

const HomeTopAppBar = ({ themeData, toggleTheme }) => {
  return (
    <CustomTopAppBar
      title={"Tip Calculator"}
      icon={themeData === MD3DarkTheme ? "weather-sunny" : "weather-night"}
      onSwitch={toggleTheme}
    />
  );
};

export default HomeTopAppBar;
