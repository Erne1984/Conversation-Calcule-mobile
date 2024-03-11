import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import { Dropdown } from './components/Dropdown/Dropdown';


export default function App() {
  const [selectedConversion, setSelectedConversion] = useState('ºC para ºF');
  const [celsius, setCelsius] = useState("");
  const [kilometer, setMph] = useState("");
  const [result, setResult] = useState("--");

  function handleConversion() {
    if (selectedConversion === 'ºC para ºF') {
      celsiusTofahrenheit();
    } else if (selectedConversion === 'km/h para mph') {
      kmTomph();
    }
  }

  function celsiusTofahrenheit() {
    const celsiusNumber = parseFloat(celsius);

    if (!isNaN(celsiusNumber)) {
      const newResult = celsiusNumber * 1.8 + 32;

      setResult(newResult.toFixed(2));
    } else {
      setResult("Entrada inválida!");
    }
  }

  function kmTomph() {
    const factorConversation = 0.621371;
    const kilometerNumber = parseFloat(kilometer);

    if (!isNaN(kilometerNumber)) {
      const Mph = kilometerNumber * factorConversation;
      setResult(Mph.toFixed(2));
    } else {
      setResult("Entrada inválida!");
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Dropdown selectedValue={selectedConversion} onValueChange={(value) => setSelectedConversion(value)} />
      <View >
        <Title content="Calculo conversão" />

        <View style={styles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            value={selectedConversion == "ºC para ºF" ? "celsius" : "kilometer"}
            placeholder='Celsius'
            style={styles.input}
            onChangeText={(text) => selectedConversion == "ºC para ºF"? setCelsius(text): setMph(text)}
          />
        </View>

        <Button event={handleConversion} />

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
