import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function OTPScreen({ navigation }: any) {

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('ResetPassword');
  };

  const numbers = ['7', '8', '5', '4'];

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
          Подтвердить номер
        </Text>

        <Text style={styles.subtitle}>
          Мы только что отправили код на{'\n'}
          <Text style={styles.phone}>
            +7 (700) 555 77 55
          </Text>
        </Text>

        <View style={styles.otpRow}>

          {numbers.map((number, index) => (
            <View
              key={index}
              style={styles.otpBox}
            >
              <Text style={styles.otpText}>
                {number}
              </Text>
            </View>
          ))}

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

  phone: {
    fontWeight: 'bold',
    color: '#000',
  },

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpText: {
    fontSize: 22,
    fontWeight: 'bold',
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