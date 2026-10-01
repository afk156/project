import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ForgetPassword from './src/components/ForgetPassword';
import OTPScreen from './src/components/OTPScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';
import SelectCityScreen from './src/components/SelectCityScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="ForgotPassword"
          children={({ navigation }) => (
            <ForgetPassword
              onBack={() => navigation.goBack()}
              onContinue={() => navigation.navigate('OTP')}
            />
          )}
        />

        <Stack.Screen
          name="OTP"
          component={OTPScreen}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
        />

        <Stack.Screen
          name="SelectCity"
          component={SelectCityScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}