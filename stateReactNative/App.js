import React, {useState} from "react";
import { Text, View, Button, SafeAreaView } from "react-native";

function App(){
  const [counter, setCounter] = useState(0);
  function increaseCounter(){
    setCounter(counter+1);
  }
  function decreaseCounter(){
    setCounter(counter-1);
  }

  return(
    <SafeAreaView>
      <Text>Counter: {counter}</Text>
      <Button title="increase counter" onPress={increaseCounter}></Button>
      <Button title="decrease counter" onPress={decreaseCounter}></Button>
    </SafeAreaView>
  )
}

export default App