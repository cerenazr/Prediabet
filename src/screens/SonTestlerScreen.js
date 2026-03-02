import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import { COLORS, CARD } from '../constants/theme';
import { getSurveyResults } from '../storage';

function getRiskColor(risk) {
  if (risk === 'Düşük Risk') return '#27AE60';
  if (risk === 'Orta Risk') return '#F39C12';
  if (risk === 'Yüksek Risk') return '#E67E22';
  return '#C0392B';
}

export default function SonTestlerScreen() {
  const [results, setResults] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getSurveyResults().then(setResults);
    }, [])
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Son Testler" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {results.length === 0 && (
          <Text style={styles.emptyText}>Henüz tamamlanmış test bulunmuyor.</Text>
        )}
        {results.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.row2}>
              <Text style={styles.score}>Puan: <Text style={styles.scoreValue}>{item.score}</Text></Text>
              <View style={[styles.riskBadge, { backgroundColor: getRiskColor(item.risk) }]}>
                <Text style={styles.riskText}>{item.risk}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 24 },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 15 },
  card: { ...CARD, paddingVertical: 14, paddingHorizontal: 16, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  row2: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  type: { fontSize: 14, fontWeight: '700', color: '#2C2C2C' },
  date: { fontSize: 13, color: '#666' },
  score: { fontSize: 14, color: '#555' },
  scoreValue: { fontWeight: '700', color: COLORS.primary },
  riskBadge: { borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4 },
  riskText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
