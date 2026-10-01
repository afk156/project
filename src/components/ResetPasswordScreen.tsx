import React, { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ResetPasswordScreen({ navigation }: any) {

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#000"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Сбросить пароль
        </Text>

        <Text style={styles.subtitle}>
          Не менее 8 символов, с прописными и строчными буквами
        </Text>

        <View style={styles.inputContainer}>

          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

        </View>

        <View style={styles.inputContainer}>

          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Повторить пароль"
            secureTextEntry
            value={repeatPassword}
            onChangeText={setRepeatPassword}
          />

        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleContinue}
        >
          <Text style={styles.primaryButtonText}>
            Продолжить
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    padding: 24,
  },

  backButton: {
    marginBottom: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 24,
    lineHeight: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 16,
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },

  primaryButton: {
    backgroundColor: '#A020F0',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

});