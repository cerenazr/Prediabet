import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { COLORS, CARD } from '../constants/theme';

export default function HaftalikAdimlarScreen({ route }) {
  const history = route.params?.history || [];

  // Last 7 records
  const weekly = history.slice(0, 7);
  const total = weekly.reduce((sum, item) => sum + (item.count || 0), 0);
  const avg = weekly.length > 0 ? Math.round(total / weekly.length) : 0;
  const maxSteps = Math.max(...weekly.map((i) => i.count || 0), 1);

  return (
    <View style={styles.container}>
      <AppHeader title="Haftalık Adımlarım" />
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Bu Hafta</Text>
          <Text style={styles.summaryValue}>{total.toLocaleString('tr-TR')}</Text>
          <Text style={styles.summaryLabel}>toplam adım</Text>
          <View style={styles.divider} />
          <Text style={styles.avgText}>Günlük Ortalama: <Text style={styles.avgValue}>{avg.toLocaleString('tr-TR')}</Text></Text>
        </View>

        <Text style={styles.sectionTitle}>Günlük Dağılım</Text>
        {weekly.map((item, idx) => {
          const pct = ((item.count || 0) / maxSteps) * 100;
          return (
            <View key={idx} style={styles.barRow}>
              <Text style={styles.barDate}>{item.date}</Text>
              <View style={styles.barBg}>
                <View style={[styles.barFill, { width: `${pct}%` }]} />
              </View>
              <Text style={styles.barCount}>{(item.count || 0).toLocaleString('tr-TR')}</Text>
            </View>
          );
        })}

        {weekly.length === 0 && (
          <Text style={styles.emptyText}>Henüz veri yok.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 20, paddingBottom: 30 },
  summaryCard: {
    ...CARD, alignItems: 'center', paddingVertical: 24, marginBottom: 20,
  },
  summaryTitle: { fontSize: 14, color: '#666', fontWeight: '600' },
  summaryValue: { fontSize: 44, fontWeight: '900', color: COLORS.primary, marginTop: 4 },
  summaryLabel: { fontSize: 13, color: '#999' },
  divider: { height: 1, backgroundColor: '#eee', width: '80%', marginVertical: 14 },
  avgText: { fontSize: 14, color: '#555' },
  avgValue: { fontWeight: '700', color: COLORS.primary },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#2C2C2C', marginBottom: 12 },
  barRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  barDate: { width: 90, fontSize: 12, color: '#666' },
  barBg: {
    flex: 1, height: 20, backgroundColor: '#E8E8E8', borderRadius: 10,
    overflow: 'hidden', marginHorizontal: 8,
  },
  barFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 10 },
  barCount: { width: 60, fontSize: 12, color: '#2C2C2C', fontWeight: '600', textAlign: 'right' },
  emptyText: { textAlign: 'center', color: '#999', marginTop: 20 },
});
