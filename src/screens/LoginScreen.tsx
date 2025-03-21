import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dashboardImage from '../../assets/dashboard.png';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Imagem de fundo com overlay */}
      <View style={styles.header}>
        <Image source={dashboardImage} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Text style={styles.headerSubtitle}>Faça o login para acessar a área administrativa.</Text>
        </View>
      </View>

      {/* Área de Login */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Login</Text>

        {/* Campo de E-mail */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
          <TextInput style={styles.input} placeholder="admin@email.com" placeholderTextColor="#666" keyboardType="email-address" />
        </View>

        {/* Campo de Senha */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
          <TextInput style={styles.input} placeholder="***" placeholderTextColor="#666" secureTextEntry />
        </View>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 200,
    position: 'relative',
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  loginContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0057FF',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
