import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Props = {
  navigation: any;
  route: {
    params?: {
      city?: string;
    };
  };
};

export default function HomeScreen({ navigation, route }: Props) {
  const city = route.params?.city || 'Алматы';

const categories = [
  { emoji: '🍽️', title: 'Рестораны', color: '#FCE8DC' },
  { emoji: '☕', title: 'Кофейни', color: '#EDE0D4' },
  { emoji: '🌳', title: 'Парки', color: '#DFF1E2' },
  {
    emoji: '🏛️',
    title: 'Достопримечательности',
    color: '#DFEAFB',
  },
];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Добро пожаловать!</Text>
            <Text style={styles.city}>📍 {city}</Text>
          </View>

          <Pressable
            style={styles.changeCity}
            onPress={() => navigation.navigate('SelectCity')}
          >
            <Text style={styles.changeCityText}>Изменить</Text>
          </Pressable>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>
            Открой свой город!
          </Text>

          <Text style={styles.bannerSubtitle}>
            Находи интересные места и создавай новые впечатления.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Что ищем сегодня?
        </Text>

         <View style={styles.categories}>
          {categories.map((item) => (
           <Pressable
                key={item.title}
                style={styles.categoryCard}
                onPress={() =>
                 navigation.navigate('Places', {
                 city,
                 category: item.title,
        })
      }
    >
      <View
        style={[
          styles.categoryIcon,
          { backgroundColor: item.color },
        ]}
      >
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>

      <Text style={styles.categoryTitle}>
        {item.title}
      </Text>

      <Text style={styles.categoryHint}>
        Смотреть места →
      </Text>
    </Pressable>
  ))}
    </View>

        <Text style={styles.sectionTitle}>
          Твой город — новые возможности
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Исследуй {city}
          </Text>
          <Text style={styles.infoText}>
            Здесь скоро появятся популярные места,
            интересные маршруты и рекомендации для тебя.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },
  container: {
    padding: 20,
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 15,
    color: '#777',
  },
  city: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 5,
  },
  changeCity: {
    backgroundColor: '#EEE5FA',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  changeCityText: {
    color: '#8A2BE2',
    fontWeight: '600',
  },
  banner: {
    backgroundColor: '#A020F0',
    borderRadius: 20,
    padding: 24,
    marginBottom: 28,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bannerSubtitle: {
    color: '#F5E8FF',
    fontSize: 15,
    lineHeight: 23,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  categoryCard: {
    width: '48%',
    minHeight: 120,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F0EDF5',
  },
  emoji: {
    fontSize: 30,
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  infoCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0EDF5',
  },
  infoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 8,
  },
  infoText: {
    color: '#666',
    fontSize: 15,
    lineHeight: 23,
  },

categoryIcon: {
  width: 54,
  height: 54,
  borderRadius: 17,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 12,
},
categoryHint: {
  color: '#8A2BE2',
  fontSize: 12,
  marginTop: 8,
  fontWeight: '600',
},

});