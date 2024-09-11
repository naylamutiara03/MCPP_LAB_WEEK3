import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ProfileProps = {
  name: string;
  age: number;
};

const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name ? `Halo nama ku: ${name}, 
        Umur ku: ${age} tahun` : "Nama belum diisi."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default Profile;
