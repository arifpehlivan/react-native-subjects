import React from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomePage(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home Page</Text>
      <TextInput style={{height:40, width:"100%", borderWidth:1}}/>
    </View>
  )
}

function UserPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Page</Text>
    </View>
  );
}

function OtherPage() {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Page </Text>
    </View>
  );
}



const App=()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator keyboardDismissMode="on-drag" tabBarPosition="bottom">
       <Tab.Screen name="Home" options={ {headerTitleAlign: 'center'}} component={HomePage} />
      <Tab.Screen name="User" options={ {headerTitleAlign: 'center'}} component={UserPage} />
      <Tab.Screen name="Other" options={ {headerTitleAlign: 'center'}} component={OtherPage} /> 
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App