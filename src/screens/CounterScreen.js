import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          //dont dot this
          // counter++;
          setCounter(counter + 1);
        }}
        title="Increase"
      />
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title="Decrease"
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
