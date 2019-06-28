import { StackNavigator } from "react-navigation";
import ColorList from "./components/ColorList";

const AppNavigator = StackNavigator({
  Home: {
    screen: ColorList
  }
});

export default AppNavigator;
