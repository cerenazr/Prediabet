import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import CTAButton from '../components/CTAButton';
import { COLORS, CARD } from '../constants/theme';
import { saveSurveyResult } from '../storage';

const SECTIONS = [
  {
    label: 'Yaşınız',
    key: 'age',
    options: [
      { text: '<45 yaş', score: 0 },
      { text: '45-54 yaş', score: 2 },
      { text: '55-64 yaş', score: 3 },
      { text: '>64 yaş', score: 4 },
    ],
  },
  {
    label: 'BKİ (Bilmiyorsanız Hesaplayın)',
    key: 'bmi',
    options: [
      { text: '<25 kg/m²', score: 0 },
      { text: '25-30 kg/m²', score: 1 },
      { text: '>30 kg/m²', score: 3 },
    ],
  },
  {
    label: 'Bel Çevresi (Gebelik öncesi bel çevresi tahmini olarak sorulacaktır)',
    key: 'waist',
    options: [
      { text: '<80 cm', score: 0 },
      { text: '80-88 cm', score: 3 },
      { text: '>88 cm', score: 4 },
    ],
  },
  {
    label: 'Fiziksel Aktivite (Haftada en az 30 dk, her gün yapıyor musunuz?)',
    key: 'activity',
    options: [
      { text: 'Evet', score: 0 },
      { text: 'Hayır', score: 2 },
    ],
  },
  {
    label: 'Sebze ve Meyve Tüketimi (Her gün tüketiyor musunuz?)',
    key: 'diet',
    options: [
      { text: 'Her gün', score: 0 },
      { text: 'Bazen', score: 1 },
    ],
  },
  {
    label: 'Hipertansiyon için ilaç kullanıyor musunuz?',
    key: 'hypertension',
    options: [
      { text: 'Hayır', score: 0 },
      { text: 'Evet', score: 2 },
    ],
  },
  {
    label: 'Daha önce yüksek kan şekeriniz oldu mu?',
    key: 'glucose',
    options: [
      { text: 'Hayır', score: 0 },
      { text: 'Evet', score: 5 },
    ],
  },
  {
    label: 'Ailenizde diyabet tanısı almış biri var mı?',
    key: 'family',
    options: [
      { text: 'Yok', score: 0 },
      { text: '2. derece akraba (büyükanne, amca vb.)', score: 3 },
      { text: '1. derece akraba (anne, baba, kardeş)', score: 5 },
    ],
  },
];

function getRiskLabel(score) {
  if (score < 7) return { label: 'Düşük Risk', color: '#27AE60' };
  if (score < 12) return { label: 'Orta Risk', color: '#F39C12' };
  if (score < 15) return { label: 'Yüksek Risk', color: '#E67E22' };
  return { label: 'Çok Yüksek Risk', color: '#C0392B' };
}

export default function FindriskScreen() {
  const [answers, setAnswers] = useState({});

  const selectOption = (key, score) => {
    setAnswers((prev) => ({ ...prev, [key]: score }));
  };

  const handleSave = async () => {
    if (Object.keys(answers).length < SECTIONS.length) {
      Alert.alert('Uyarı', 'Lütfen tüm soruları cevaplayın.');
      return;
    }
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const risk = getRiskLabel(total);
    const date = new Date().toLocaleDateString('tr-TR');
    await saveSurveyResult({ score: total, risk: risk.label, date, type: 'FINDRISC' });
    Alert.alert(
      'Sonuç',
      `Toplam Puanınız: ${total}\nRisk Düzeyi: ${risk.label}`,
      [{ text: 'Tamam' }]
    );
    setAnswers({});
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  return (
    <View style={styles.container}>
      <AppHeader title="FİNLANDİYA TİP-2 DİYABET RİSK ANKETİ (FINDRISK)" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {SECTIONS.map((section) => (
          <View key={section.key} style={styles.section}>
            <Text style={styles.sectionLabel}>{section.label}</Text>
            {section.options.map((opt, oIdx) => {
              const isSelected = answers[section.key] === opt.score;
              return (
                <TouchableOpacity
                  key={oIdx}
                  style={[styles.option, isSelected && styles.optionSelected]}
                  onPress={() => selectOption(section.key, opt.score)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.radio, isSelected && styles.radioSelected]}>
                    {isSelected && <View style={styles.radioDot} />}
                  </View>
                  <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {opt.text}
                  </Text>
                  <Text style={styles.scoreText}>{opt.score}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {Object.keys(answers).length > 0 && (
          <View style={styles.scoreCard}>
            <Text style={styles.scoreCardLabel}>Anlık Puan</Text>
            <Text style={styles.scoreCardValue}>{totalScore}</Text>
            <Text style={[styles.riskLabel, { color: getRiskLabel(totalScore).color }]}>
              {getRiskLabel(totalScore).label}
            </Text>
          </View>
        )}
      </ScrollView>
      <CTAButton title="Kaydet" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 8 },
  section: { marginBottom: 20 },
  sectionLabel: {
    fontSize: 14, fontWeight: '700', color: '#2C2C2C', marginBottom: 8, lineHeight: 20,
  },
  option: {
    ...CARD, flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, paddingHorizontal: 14, marginBottom: 6,
  },
  optionSelected: { borderWidth: 1.5, borderColor: COLORS.primary },
  radio: {
    width: 20, height: 20, borderRadius: 10, borderWidth: 2,
    borderColor: '#ccc', alignItems: 'center', justifyContent: 'center', marginRight: 10,
  },
  radioSelected: { borderColor: COLORS.primary },
  radioDot: {
    width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.primary,
  },
  optionText: { flex: 1, fontSize: 13, color: '#2C2C2C' },
  optionTextSelected: { color: COLORS.primary, fontWeight: '600' },
  scoreText: { fontSize: 13, color: '#999', fontWeight: '600', width: 20, textAlign: 'right' },
  scoreCard: {
    ...CARD, alignItems: 'center', paddingVertical: 20, marginTop: 8,
  },
  scoreCardLabel: { fontSize: 13, color: '#666', fontWeight: '600' },
  scoreCardValue: { fontSize: 40, fontWeight: '900', color: COLORS.primary, marginVertical: 4 },
  riskLabel: { fontSize: 16, fontWeight: '700' },
});
