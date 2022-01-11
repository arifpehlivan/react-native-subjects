import React from "react";
import { View, Text, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

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
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="User" component={UserPage} />
      <Drawer.Screen name="Other" component={OtherPage} /> 
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App