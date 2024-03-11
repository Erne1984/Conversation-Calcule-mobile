import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import { Dropdown } from './components/Dropdown/Dropdown';


export default function App() {
  const [celsius, setCelsius] = useState("0");
  const [result, setResult] = useState("--");

  function celsiusTofahrenheit() {
    console.log("Button Pressed");
    const celsiusNumber = parseFloat(celsius);

    if (!isNaN(celsiusNumber)) {
      const newResult = celsiusNumber * 1.8 + 32;

      setResult(newResult.toFixed(2)); 
    } else {
      setResult("Invalid input");
    }
  }

  console.log(result)

  return (
    <ScrollView style={styles.container}>
      <Dropdown />
      <View >
        <Title content="Calculo conversão" />

        <View style={styles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            value={celsius}
            placeholder='Celsius'
            style={styles.input}
            onChangeText={(text) => setCelsius(text)}
          />
        </View>

        <Button event={celsiusTofahrenheit} />

        <View style={styles.boxResult}>
          <Text style={styles.boxResultText}>Valor convertido:</Text>
          <Text style={styles.boxResultValue}>{result}</Text>
        </View>

        <StatusBar style={styles.theme} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  theme: {
    backgroundColor: "black"
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 80,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "purple",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  boxResult: {
    marginTop: 30,
  },
  boxResultText: {
    fontSize: 23,
  },
  boxResultValue: {
    fontSize: 18,
    color: "purple"
  }
});
