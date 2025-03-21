import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import logoImage from '../../assets/dashboard.png';
import odontoprevImage from '../../assets/dashboard.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Image source={odontoprevImage} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Começar →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: 'absolute',
    bottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
