import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  navigation: any;
};

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    navigation.navigate('SelectCity');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.subtitle}>Создайте учетную запись, 
чтобы продолжить!</Text>

        <TextInput
          style={styles.input}
          placeholder="Имя"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Номер телефона"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={styles.agreeRow}
          onPress={() => setAgree(!agree)}
        >
          <Text style={styles.checkbox}>
            {agree ? '☑' : '☐'}
          </Text>

          <Text style={styles.agreeText}>
            Создавая учетную запись, 
            вы соглашаетесь с нашими Условиями использования.
          </Text>
        </Pressable>

        <Pressable
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>
            Зарегистрироваться
          </Text>
        </Pressable>

        <Pressable onPress={handleLogin}>
          <Text style={styles.loginText}>
            Уже есть аккаунт? Войти
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    padding: 20,
  },

  backButton: {
    marginBottom: 20,
  },

  backButtonText: {
    fontSize: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  checkbox: {
    fontSize: 24,
    marginRight: 8,
  },

  agreeText: {
    fontSize: 14,
  },

  registerButton: {
    backgroundColor: '#A020F0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#A020F0',
  },
});