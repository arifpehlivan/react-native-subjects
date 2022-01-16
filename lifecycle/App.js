import React, { useState, useEffect } from "react";
import { SafeAreaView, Text,  Button } from "react-native";

function App(){
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  console.log('render');

  useEffect(()=>{console.log('Number Updated')}, [number]);
  useEffect(()=>{console.log('Number Updated')}, [counter]);

  return(
    <SafeAreaView>
      <Text>Number: {number}</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Up Number" onPress={()=>setNumber(number+1)}/>
      <Button title="Up Counter" onPress={()=>setCounter(counter+1)}/>
    </SafeAreaView>
  )
}

export default App