import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import { COLORS, CARD } from '../constants/theme';
import { getUser, saveUser } from '../storage';

export default function ProfilScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        setName(user.name || '');
        setPhone(user.phone || '');
        setPassword(user.password || '');
      }
    });
  }, []);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Hata', 'Ad Soyad alanı boş bırakılamaz.');
      return;
    }
    await saveUser({ name: name.trim(), phone: phone.trim(), password });
    Alert.alert('Başarılı', 'Profil güncellendi.');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AppHeader title="Profil" />
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>PREDIABET</Text>
          </View>
        </View>

        <TextInput style={styles.input} placeholder="Adı Soyadı" placeholderTextColor="#999"
          value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Telefon" placeholderTextColor="#999"
          keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        <TextInput style={styles.input} placeholder="Şifre" placeholderTextColor="#999"
          secureTextEntry value={password} onChangeText={setPassword} />
      </ScrollView>
      <CTAButton title="Profili Güncelle" onPress={handleSave} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 24 },
  logoWrap: { alignItems: 'center', marginBottom: 32 },
  logoCircle: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: COLORS.white,
    borderWidth: 2.5, borderColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, elevation: 4,
  },
  logoText: { color: COLORS.primary, fontWeight: '900', fontSize: 10, textAlign: 'center' },
  input: {
    ...CARD, backgroundColor: COLORS.white,
    fontSize: 15, color: '#2C2C2C',
    paddingVertical: 14, paddingHorizontal: 16, marginBottom: 12,
  },
});
