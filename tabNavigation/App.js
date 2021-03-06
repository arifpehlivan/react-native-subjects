import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomePage(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home Page</Text>
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
      <Tab.Navigator>
       <Tab.Screen name="Home" options={ {headerTitleAlign: 'center'}} component={HomePage} />
      <Tab.Screen name="User" options={ {headerTitleAlign: 'center'}} component={UserPage} />
      <Tab.Screen name="Other" options={ {headerTitleAlign: 'center'}} component={OtherPage} /> 
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App