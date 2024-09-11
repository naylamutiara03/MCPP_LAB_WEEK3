import { StyleSheet, View, TextInput, Button } from 'react-native';
import Counter from "./component/Counter";
import Profile from "./component/Profile";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayCount, setDisplayCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handlePassValue = () => {
    setDisplayName(name);
    setDisplayCount(count);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input Nama"
        onChangeText={setName}
        value={name}
      />
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePassValue={handlePassValue}
      />
      <Profile name={displayName} age={displayCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
