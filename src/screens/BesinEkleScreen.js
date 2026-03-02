import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import { COLORS, CARD } from '../constants/theme';
import { saveFoodLog } from '../storage';

const FOOD_CATEGORIES = [
  'Çavdar umu ve kepekli ekmeğin yanı sıra buğday umu',
  'Balık Havyarı',
  'Et ve mantar et suyu, yanı sıra bunlara dayalı yemekler',
  'Yüksek yağlı içerikli süt ürünleri',
  'Siyah ve yeşil çay, bitkisel çaylar ve soğanlar, yabani gül suyu',
  'Az yağlı balıklar (pollock, walleye, turna, hake vs.) – fırında kaynatım veya fırında pişirin',
  'Yağda konserve balık',
  'Füme, kurutulmuş ve tuzlu balık',
  'Sütlü tatlılar',
  'İç yağ',
  'Dondurma, reçeller, kremler, tatlılar',
  'Herhangi bir formda yağlı balık türleri',
];

export default function BesinEkleScreen() {
  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSave = async () => {
    if (selected.length === 0) {
      Alert.alert('Uyarı', 'Lütfen en az bir besin kategorisi seçin.');
      return;
    }
    const date = new Date().toLocaleDateString('tr-TR');
    await saveFoodLog({ categories: selected, date });
    setSelected([]);
    Alert.alert('Kaydedildi', 'Besin seçimleriniz kaydedildi.');
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Besin Ekle" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {FOOD_CATEGORIES.map((item, idx) => {
          const isSelected = selected.includes(item);
          return (
            <TouchableOpacity
              key={idx}
              style={[styles.card, isSelected && styles.cardSelected]}
              onPress={() => toggle(item)}
              activeOpacity={0.8}
            >
              <Text style={[styles.cardText, isSelected && styles.cardTextSelected]}>
                {item}
              </Text>
              {isSelected && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <CTAButton title="Kaydet" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 8 },
  card: {
    ...CARD, flexDirection: 'row', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 16, marginBottom: 8,
  },
  cardSelected: { borderWidth: 1.5, borderColor: COLORS.primary },
  cardText: { flex: 1, fontSize: 14, color: '#2C2C2C', lineHeight: 20 },
  cardTextSelected: { color: COLORS.primary, fontWeight: '600' },
  checkMark: { color: COLORS.primary, fontWeight: '700', fontSize: 16, marginLeft: 8 },
});
