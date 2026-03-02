import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import AppHeader from '../components/AppHeader';
import { COLORS, CARD } from '../constants/theme';

const CONTACTS = [
  { label: 'Telefon: 0545 664 76 62', action: 'tel:05456647662' },
  { label: 'E-Posta: ibrahim.topuz@ksbu.edu.tr', action: 'mailto:ibrahim.topuz@ksbu.edu.tr' },
  { label: 'Website: www.prediabet-tr.com', action: 'https://www.prediabet-tr.com' },
  { label: 'Whatsapp ile yaz', action: 'https://wa.me/905456647662' },
  { label: 'Uzmana sor', action: 'mailto:ibrahim.topuz@ksbu.edu.tr?subject=Uzmana%20Soru' },
];

export default function IletisimScreen() {
  const handlePress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Hata', 'Bu işlem desteklenmiyor.');
      }
    } catch {
      Alert.alert('Hata', 'Bağlantı açılamadı.');
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader title="İletişim" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {CONTACTS.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => handlePress(item.action)}
            activeOpacity={0.75}
          >
            <Text style={styles.cardText}>{item.label}</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 24 },
  card: {
    ...CARD, flexDirection: 'row', alignItems: 'center',
    paddingVertical: 16, paddingHorizontal: 16, marginBottom: 8,
  },
  cardText: { flex: 1, fontSize: 14, color: '#2C2C2C', fontWeight: '500' },
  arrow: { fontSize: 20, color: COLORS.primary, fontWeight: '700' },
});
