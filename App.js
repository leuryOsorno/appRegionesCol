import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigarionBar from "./components/NavigationBar";
import Region_detalle from './components/Region_detalle';

const Stack = createStackNavigator(); 


export default function App() {
  return (
   <NavigationContainer>
    <NavigarionBar />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
