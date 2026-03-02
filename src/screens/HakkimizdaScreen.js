import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import { CARD } from '../constants/theme';

export default function HakkimizdaScreen() {
  return (
    <View style={styles.container}>
      <AppHeader title="Hakkımızda" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.bodyText}>
            PREDIABE-TR mobil uygulamasının geliştirilmesi ve kullanılabilirliğinin
            değerlendirilmesi. Bu mobil uygulama prediyabetli bireylere sağlıkla ilgili
            konularda bilgi sunmak ve bireylerde sağlıklı yaşam biçimi davranışları
            oluşturulmasının sağlanmasını içermektedir.{'\n\n'}
            Uygulama, Kütahya Sağlık Bilimleri Üniversitesi akademisyenleri tarafından
            prediyabet yönetimini desteklemek amacıyla geliştirilmiştir. Sağlık profesyonelleri
            ile iş birliği yapılarak hazırlanan içerikler, kullanıcıların doğru bilgiye
            kolayca erişmesini sağlamaktadır.
          </Text>
        </View>

        {/* Placeholder images — replace with actual assets */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📷 Kan Şekeri Ölçümü</Text>
        </View>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📷 Tıbbi Malzemeler</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 30 },
  card: { ...CARD, paddingVertical: 18, paddingHorizontal: 18, marginBottom: 14 },
  bodyText: { fontSize: 15, color: '#2C2C2C', lineHeight: 24 },
  imagePlaceholder: {
    backgroundColor: '#E0E0E0', borderRadius: 12, height: 180,
    alignItems: 'center', justifyContent: 'center', marginBottom: 14,
  },
  imagePlaceholderText: { fontSize: 16, color: '#888' },
});
