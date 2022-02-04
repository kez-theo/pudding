import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fridge from "./Fridge";
import Home from "./Home";

const Bottom = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Fridge" component={Fridge} />
      <Bottom.Screen name="Home" component={Home} />
    </Bottom.Navigator>
  );
}
