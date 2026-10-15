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

type Place = {
  name: string;
  description: string;
  detail: string;
  emoji: string;
  color: string;
};

type Props = {
  navigation: any;
  route: {
    params: {
      city: string;
      category: string;
    };
  };
};

const placeData: Record<string, Place[]> = {
  'Рестораны': [
    {
      name: 'Ресторан национальной кухни',
      description: 'Казахская кухня',
      detail: 'Мясные блюда • Семейный отдых',
      emoji: '🍽️',
      color: '#FCE8DC',
    },
    {
      name: 'Ресторан европейской кухни',
      description: 'Европейские блюда',
      detail: 'Обед • Ужин',
      emoji: '🥘',
      color: '#F8E8D5',
    },
    {
      name: 'Уютный семейный ресторан',
      description: 'Для встреч с друзьями',
      detail: 'Семейный отдых • Ужин',
      emoji: '🍝',
      color: '#F5E5E8',
    },
  ],
  'Кофейни': [
    {
      name: 'Кофейня в центре',
      description: 'Кофе и свежая выпечка',
      detail: 'Кофе • Десерты',
      emoji: '☕',
      color: '#EDE0D4',
    },
    {
      name: 'Уютная кофейня',
      description: 'Место для отдыха',
      detail: 'Капучино • Чай',
      emoji: '🥐',
      color: '#F7E8D1',
    },
  ],
  'Парки': [
    {
      name: 'Центральный парк',
      description: 'Прогулки на свежем воздухе',
      detail: 'Прогулки • Отдых',
      emoji: '🌳',
      color: '#DFF1E2',
    },
    {
      name: 'Зелёная зона отдыха',
      description: 'Отдохни от городской суеты',
      detail: 'Природа • Фотографии',
      emoji: '🌿',
      color: '#E8F1D9',
    },
  ],
  'Достопримечательности': [
    {
      name: 'Кок-Тобе',
      description: 'Популярное место с панорамным видом на Алматы',
      detail: 'Панорама • Прогулки',
      emoji: '🏔️',
      color: '#DFEAFB',
    },
    {
      name: 'Медеу',
      description: 'Знаменитый высокогорный каток',
      detail: 'Горы • Спорт',
      emoji: '⛸️',
      color: '#DDF1F4',
    },
    {
      name: 'Парк имени 28 гвардейцев-панфиловцев',
      description: 'Зелёный парк в центре Алматы',
      detail: 'История • Прогулки',
      emoji: '🏛️',
      color: '#E4EFD9',
    },
  ],
};

export default function PlacesScreen({ navigation, route }: Props) {
  const { city, category } = route.params;
  const places = placeData[category] || [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.heading}>{category}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.count}>
          Подборка мест · {places.length}
        </Text>

        {places.map((place, index) => (
          <View key={`${place.name}-${index}`} style={styles.card}>
            <View
              style={[
                styles.illustration,
                { backgroundColor: place.color },
              ]}
            >
              <Text style={styles.emoji}>{place.emoji}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.placeName}>{place.name}</Text>

              <Text style={styles.description}>
                {place.description}
              </Text>

              <Text style={styles.detail}>
                {place.detail}
              </Text>

              <Pressable
                style={styles.moreButton}
                onPress={() =>
                  navigation.navigate('PlaceDetails', {
                    city,
                    category,
                    place,
                  })
                }
              >
                <Text style={styles.moreText}>
                  Подробнее →
                </Text>
              </Pressable>
            </View>
          </View>
        ))}

        <Text style={styles.note}>
          Это демонстрационная подборка. Кроме указанных
          достопримечательностей, остальные карточки —
          примеры для будущего каталога.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 18,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#F0E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    fontSize: 34,
    lineHeight: 38,
    color: '#8A2BE2',
  },
  headerText: {
    marginLeft: 14,
    flex: 1,
  },
  city: {
    fontSize: 13,
    color: '#85818D',
    marginBottom: 3,
  },
  heading: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#24212B',
  },
  content: {
    padding: 18,
    paddingBottom: 35,
  },
  count: {
    fontSize: 14,
    color: '#77717F',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EFEDF3',
  },
  illustration: {
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 55,
  },
  cardBody: {
    padding: 16,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#282431',
    marginBottom: 7,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#625D6B',
  },
  detail: {
    fontSize: 12,
    color: '#8A2BE2',
    marginTop: 10,
  },
  moreButton: {
    alignSelf: 'flex-start',
    marginTop: 14,
    backgroundColor: '#F0E6FA',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  moreText: {
    color: '#8025CB',
    fontWeight: 'bold',
    fontSize: 14,
  },
  note: {
    color: '#85818D',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
});