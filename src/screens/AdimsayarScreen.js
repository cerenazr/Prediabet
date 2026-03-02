import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Pedometer } from 'expo-sensors';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import { COLORS, CARD } from '../constants/theme';
import { getStepHistory, saveStepRecord } from '../storage';

export default function AdimsayarScreen({ navigation }) {
  const [stepCount, setStepCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);

  const loadHistory = async () => {
    const data = await getStepHistory();
    setHistory(data);
  };

  useFocusEffect(useCallback(() => {
    loadHistory();
  }, []));

  useEffect(() => {
    let subscription;

    Pedometer.isAvailableAsync().then((available) => {
      setIsPedometerAvailable(available);
      if (available) {
        subscription = Pedometer.watchStepCount((result) => {
          setStepCount(result.steps);
        });

        // Get today's steps
        const end = new Date();
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        Pedometer.getStepCountAsync(start, end).then((result) => {
          setStepCount(result.steps);
        }).catch(() => {});
      }
    });

    return () => subscription && subscription.remove();
  }, []);

  const saveToday = async () => {
    const date = new Date().toLocaleDateString('tr-TR');
    await saveStepRecord({ count: stepCount, date });
    loadHistory();
    Alert.alert('Kaydedildi', `${stepCount} adım kaydedildi.`);
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Adımsayar" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <View style={styles.countCard}>
          <Text style={styles.countLabel}>ADIM SAYISI</Text>
          <Text style={styles.countValue}>{stepCount.toLocaleString('tr-TR')}</Text>
          {!isPedometerAvailable && (
            <Text style={styles.unavailableText}>
              Adımsayar bu cihazda kullanılamıyor.
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.saveSmallBtn} onPress={saveToday}>
          <Text style={styles.saveSmallText}>Bugünü Kaydet</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Geçmiş Adımlarım</Text>

        {history.map((item, idx) => (
          <View key={idx} style={styles.historyCard}>
            <Text style={styles.historyText}>Adım Sayısı: {item.count?.toLocaleString('tr-TR') || 0}</Text>
            <Text style={styles.historyDate}>Tarih: {item.date}</Text>
          </View>
        ))}

        {history.length === 0 && (
          <Text style={styles.emptyText}>Henüz kayıt yok.</Text>
        )}
      </ScrollView>
      <CTAButton
        title="Haftalık Adımlarım"
        onPress={() => navigation.navigate('HaftalikAdimlar', { history })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 20, paddingBottom: 8 },
  countCard: {
    ...CARD, alignItems: 'center', paddingVertical: 28, marginBottom: 12,
  },
  countLabel: { fontSize: 14, color: '#666', fontWeight: '600', letterSpacing: 1, marginBottom: 6 },
  countValue: { fontSize: 48, fontWeight: '900', color: COLORS.primary },
  unavailableText: { fontSize: 12, color: '#999', marginTop: 8, textAlign: 'center' },
  saveSmallBtn: {
    alignSelf: 'center', backgroundColor: COLORS.primary,
    borderRadius: 20, paddingHorizontal: 24, paddingVertical: 10, marginBottom: 20,
  },
  saveSmallText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#2C2C2C', marginBottom: 10 },
  historyCard: {
    ...CARD, flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, paddingHorizontal: 16, marginBottom: 8,
  },
  historyText: { flex: 1, fontSize: 14, color: '#2C2C2C', fontWeight: '500' },
  historyDate: { fontSize: 13, color: '#666' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 20 },
});
