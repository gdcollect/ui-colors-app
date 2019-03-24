import { createStackNavigator, createAppContainer } from "react-navigation";
import Colors from "./componants/colorPalettes";
import ColorDetails from "./componants/colorDetails";
import ApplyColor from "./componants/applyColor";

const StackNav = createStackNavigator(
  {
    Colors: {
      screen: Colors,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },

    ColorDetails: {
      screen: ColorDetails,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },

    ApplyColor: {
      screen: ApplyColor,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Colors"
  }
);

export default createAppContainer(StackNav);
