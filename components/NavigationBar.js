import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator(); 

 function NavigationBar(){
    return(
        <Tab.navigator>
            <Tab.Screen 
                name="Home"
                component={MainScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Icon name="Home" type="font-awesome" color={color} size={size}/>
                    ),
                }} 
            />
            <Tab.Screen 
                name="Regiones"
                component={MainScreen}
                options={{
                    tabBarIcon:({color,size})=>(
                        <Icon name="poo" type="font-awesome" color={color} size={size}/>
                    ),
                }} 
            />
        </Tab.navigator>
           
 )}
 export default NavigationBar


