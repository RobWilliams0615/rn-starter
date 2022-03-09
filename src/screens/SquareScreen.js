import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 25;
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 })
// console.log(state)
  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
