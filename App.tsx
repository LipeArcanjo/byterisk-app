import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BeneficiariosScreen from './src/screens/BeneficiariosScreen';
import FuncionariosScreen from './src/screens/FuncionariosScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Splash">
<Stack.Screen name="Splash" component={SplashScreen}/>
<Stack.Screen name="Login" component={LoginScreen}/>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Beneficiarios" component={BeneficiariosScreen} />
<Stack.Screen name="Funcionarios" component={FuncionariosScreen} />
</Stack.Navigator>
</NavigationContainer>
  );
}