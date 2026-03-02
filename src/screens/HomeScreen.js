import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { clearUser } from '../storage';

const MENU_ITEMS = [
  ['Profil', 'Bilgilendirme'],
  ['BKİ Hesaplama', 'Ön Testler'],
  ['Son Testler', 'İletişim'],
  ['Hakkımızda', 'S.S.S.'],
  ['Besin Ekle', 'Adımsayar'],
];

const SCREEN_MAP = {
  'Profil': 'Profil',
  'Bilgilendirme': 'Bilgilendirme',
  'BKİ Hesaplama': 'BKIHesaplama',
  'Ön Testler': 'OnTestler',
  'Son Testler': 'SonTestler',
  'İletişim': 'Iletisim',
  'Hakkımızda': 'Hakkimizda',
  'S.S.S.': 'SSS',
  'Besin Ekle': 'BesinEkle',
  'Adımsayar': 'Adimsayar',
};

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await clearUser();
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerSide} />
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>{'🩺'}</Text>
            <Text style={styles.logoLabel}>PREDIABET</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerSide} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>⇥</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Grid */}
      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false}>
        {MENU_ITEMS.map((row, rowIdx) => (
          <View key={rowIdx} style={styles.row}>
            {row.map((label) => (
              <TouchableOpacity
                key={label}
                style={styles.menuCard}
                activeOpacity={0.75}
                onPress={() => navigation.navigate(SCREEN_MAP[label])}
              >
                <Text style={styles.menuLabel}>{label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 44,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerSide: { width: 40, alignItems: 'flex-end' },
  logoutIcon: { color: '#fff', fontSize: 22, fontWeight: '700' },
  logoWrap: { flex: 1, alignItems: 'center' },
  logoCircle: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#fff',
    borderWidth: 2.5, borderColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center', justifyContent: 'center',
  },
  logoText: { fontSize: 28 },
  logoLabel: {
    color: COLORS.primary, fontWeight: '900', fontSize: 8,
    letterSpacing: 1, marginTop: 1,
  },
  grid: { padding: 16, paddingTop: 20 },
  row: { flexDirection: 'row', marginBottom: 12, gap: 12 },
  menuCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 22,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 70,
  },
  menuLabel: {
    color: '#2C2C2C', fontWeight: '600', fontSize: 14,
    textAlign: 'center',
  },
});
