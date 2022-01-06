import React from "react";
import { View, Text, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomePage({ navigation }){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Home Page</Text>
      <Button
        title="Go to User Page"
        onPress={() => navigation.navigate('User')}
      />
      <Button
        title="Go to Other Page"
        onPress={() => navigation.navigate('Other')}
      />
    </View>
  )
}

function UserPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Page</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function OtherPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Page</Text>
      <Button
        title="Go to Homme Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="User" component={UserPage} />
        <Stack.Screen name="Other" component={OtherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App