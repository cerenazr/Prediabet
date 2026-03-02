import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, Image, StatusBar, Alert,
} from 'react-native';
import { COLORS, CARD } from '../constants/theme';
import { saveUser, getUser } from '../storage';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUser().then((user) => {
      if (user) navigation.replace('Home');
    });
  }, []);

  const handleLogin = async () => {
    if (!name.trim() || !password.trim()) {
      Alert.alert('Hata', 'Ad Soyad ve Şifre alanları zorunludur.');
      return;
    }
    await saveUser({ name: name.trim(), phone: phone.trim(), password });
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.topBar} />
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <View style={styles.logoWrap}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>PREDIABET</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Adı Soyadı"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefon"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin} activeOpacity={0.85}>
          <Text style={styles.btnText}>Giriş Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  topBar: {
    backgroundColor: COLORS.primary,
    height: StatusBar.currentHeight ? StatusBar.currentHeight + 60 : 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    top: 0, left: 0, right: 0,
  },
  inner: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 40 },
  logoWrap: { alignItems: 'center', marginBottom: 40, marginTop: 20 },
  logoCircle: {
    width: 110, height: 110, borderRadius: 55,
    backgroundColor: COLORS.white,
    borderWidth: 3, borderColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 8, elevation: 5,
  },
  logoText: { color: COLORS.primary, fontWeight: '900', fontSize: 12, textAlign: 'center' },
  input: {
    ...CARD, backgroundColor: COLORS.white,
    fontSize: 15, color: '#2C2C2C',
    paddingVertical: 14, paddingHorizontal: 16,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: COLORS.primary, borderRadius: 24,
    paddingVertical: 16, alignItems: 'center', marginTop: 12,
  },
  btnText: { color: COLORS.white, fontWeight: '700', fontSize: 17 },
});
