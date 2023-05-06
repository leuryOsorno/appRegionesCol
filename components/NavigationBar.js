import React from "react";
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'; 
import MainScreen from './MainScreen';
import Regiones from './Regiones';
import Region_detalle from './Region_detalle';


const Tab = createBottomTabNavigator(); 
const MainStack = createStackNavigator();
const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Regiones" component={Regiones} />
        <MainStack.Screen name="RegionDetalle" component={Region_detalle} />
      </MainStack.Navigator>
    );
  };
 function NavigationBar(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={MainScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Icon name="home" type="font-awesome" color={color} size={size}/>
                    ),
                }} 
            />
            <Tab.Screen 
                name="Regiones de Colombia"
                component={MainStackScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Icon name="rebel" type="font-awesome" color={color} size={size}/>
                    ),
                }} 
            />
            
        </Tab.Navigator>
           
 )}
 export default NavigationBar


