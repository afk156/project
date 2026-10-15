import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PlaceDetailsScreen({ navigation, route }: any) {
  const { city, category, place } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.container}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹  Назад</Text>
        </Pressable>

        <View style={[styles.hero, { backgroundColor: place.color }]}>
          <Text style={styles.emoji}>{place.emoji}</Text>
        </View>

        <Text style={styles.category}>{category} · {city}</Text>
        <Text style={styles.title}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>О месте</Text>
          <Text style={styles.infoText}>{place.detail}</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Что можно узнать</Text>
          <Text style={styles.infoText}>
            Адрес, график работы, фотографии и маршрут можно
            добавить, когда подключим реальные данные о местах.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  container: {
    padding: 20,
    paddingBottom: 35,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    marginBottom: 15,
  },
  backText: {
    color: '#8025CB',
    fontSize: 17,
    fontWeight: '600',
  },
  hero: {
    height: 210,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  emoji: {
    fontSize: 85,
  },
  category: {
    color: '#8A2BE2',
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    color: '#282431',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#625D6B',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#282431',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#625D6B',
  },
});