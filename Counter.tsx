import React from 'react';
import { View, Text, Button } from 'react-native';

const Counter = ({ value, handleIncrement, handleDecrement, handlePassValue }) => {
  return (
    <View>
      <Text>Count: {value}</Text>
      <Button onPress={handleIncrement} title="Increment" />
      <Button onPress={handleDecrement} title="Decrement" />
      <Button onPress={handlePassValue} title="Pass Value" />
    </View>
  );
};

export default Counter;
