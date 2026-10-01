import React, { useState } from 'react';

import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

type Props = {
  navigation: any;
};

export default function SelectCityScreen({ navigation }: Props) {
  const [selectedCity, setSelectedCity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const cities = [
  'Алматы',
  'Астана',
  'Шымкент',
  'Қарағанды',
  'Тараз',
  'Ақтөбе',
  'Павлодар',
  'Өскемен',
  'Семей',
  'Қызылорда',
  'Орал',
  'Қостанай',
  'Петропавл',
  'Ақтау',
  'Атырау',
  'Түркістан',
  'Көкшетау',
  'Жезқазған',
  'Балқаш',
  'Талдықорған',
];

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSelect = (city: string) => {
    setSelectedCity(city);
    setModalVisible(false);
  };

  const handleContinue = () => {
    if (selectedCity) {
      console.log('Выбранный город:', selectedCity);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>

        <Text style={styles.title}>
          Выберите город
        </Text>

        <Text style={styles.subtitle}>
          Выберите город, в котором вы находитесь
        </Text>

        <Pressable
          style={styles.cityButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.cityButtonText}>
            {selectedCity || 'Выберите город'}
          </Text>

          <Text style={styles.arrow}>▼</Text>
        </Pressable>

        <Pressable
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>
            Продолжить
          </Text>
        </Pressable>

        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>

              <Text style={styles.modalTitle}>
                Выберите город
              </Text>

              {cities.map((city) => (
                <Pressable
                  key={city}
                  style={styles.cityItem}
                  onPress={() => handleSelect(city)}
                >
                  <Text style={styles.cityItemText}>
                    {city}
                  </Text>
                </Pressable>
              ))}

              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>
                  Закрыть
                </Text>
              </Pressable>

            </View>
          </View>
        </Modal>

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
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },

  cityButton: {
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cityButtonText: {
    fontSize: 16,
  },

  arrow: {
    fontSize: 16,
  },

  continueButton: {
    backgroundColor: '#A020F0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },

  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  cityItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  cityItemText: {
    fontSize: 17,
  },

  closeButton: {
    marginTop: 15,
    padding: 15,
    alignItems: 'center',
  },

  closeButtonText: {
    color: '#A020F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});