import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity, KeyboardAvoidingView, Platform, Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import { COLORS, CARD } from '../constants/theme';
import { getBMIHistory, saveBMIRecord, deleteBMIRecord } from '../storage';

export default function BKIHesaplamaScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    const data = await getBMIHistory();
    setHistory(data);
  };

  useFocusEffect(useCallback(() => { loadHistory(); }, []));

  const calculate = async () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h || h === 0) {
      Alert.alert('Hata', 'Lütfen geçerli kilo ve boy değerleri girin.');
      return;
    }
    const bmi = (w / (h * h)).toFixed(2);
    setResult(bmi);
    const date = new Date().toLocaleDateString('tr-TR');
    await saveBMIRecord({ value: bmi, date });
    loadHistory();
  };

  const handleDelete = async (index) => {
    await deleteBMIRecord(index);
    loadHistory();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AppHeader title="BKİ Hesaplama" />
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <TextInput style={styles.input} placeholder="Kilonuzu Giriniz (kg)"
          placeholderTextColor="#999" keyboardType="decimal-pad"
          value={weight} onChangeText={setWeight} />
        <TextInput style={styles.input} placeholder="Boyunuzu Giriniz (cm)"
          placeholderTextColor="#999" keyboardType="decimal-pad"
          value={height} onChangeText={setHeight} />

        <Text style={styles.resultLabel}>
          BKİ Değeri:{result ? <Text style={styles.resultValue}> {result}</Text> : null}
        </Text>

        <CTAButton title="Hesapla" onPress={calculate} style={styles.calcBtn} />

        {history.map((item, idx) => (
          <View key={idx} style={styles.historyCard}>
            <Text style={styles.historyText}>BKİ Değeri: {item.value}</Text>
            <Text style={styles.historyDate}>{item.date}</Text>
            <TouchableOpacity onPress={() => handleDelete(idx)} style={styles.deleteBtn}>
              <Text style={styles.deleteIcon}>🗑</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 20, paddingBottom: 30 },
  input: {
    ...CARD, backgroundColor: '#fff',
    fontSize: 15, color: '#2C2C2C',
    paddingVertical: 14, paddingHorizontal: 16, marginBottom: 12,
  },
  resultLabel: { fontSize: 16, fontWeight: '600', color: '#2C2C2C', marginBottom: 8, marginLeft: 4 },
  resultValue: { color: COLORS.primary, fontSize: 18, fontWeight: '700' },
  calcBtn: { marginHorizontal: 0, marginBottom: 24 },
  historyCard: {
    ...CARD, flexDirection: 'row', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 16, marginBottom: 8,
  },
  historyText: { flex: 1, fontSize: 14, color: '#2C2C2C', fontWeight: '500' },
  historyDate: { fontSize: 13, color: '#666', marginRight: 10 },
  deleteBtn: { padding: 4 },
  deleteIcon: { fontSize: 18 },
});
