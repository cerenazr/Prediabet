import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { COLORS, CARD } from '../constants/theme';

const TOPICS = [
  {
    title: 'Prediyabe-TR mobil uygulaması nedir?',
    content:
      'PREDIABE-TR mobil uygulaması, prediyabetli bireylere sağlıkla ilgili konularda bilgi sunmak ve sağlıklı yaşam biçimi davranışları oluşturmalarını sağlamak amacıyla geliştirilmiş bir mobil uygulamadır.',
  },
  {
    title: 'Prediyabe-TR mobil uygulamasının hedefleri nelerdir?',
    content:
      'Uygulamanın temel hedefi, prediyabetli bireylerin diyabete geçiş sürecini yavaşlatmak, sağlıklı beslenme alışkanlıkları kazandırmak ve fiziksel aktiviteyi artırmaktır.',
  },
  {
    title: 'Prediyabe-TR mobil uygulamasının tasarımcıları kimlerdir?',
    content:
      'Uygulama, Kütahya Sağlık Bilimleri Üniversitesi bünyesinde sağlık uzmanları tarafından tasarlanmış ve geliştirilmiştir.',
  },
  {
    title: 'Sağlıklı Yaşam',
    content:
      'Sağlıklı yaşam için düzenli fiziksel aktivite, dengeli beslenme ve yeterli uyku büyük önem taşır. Dünya Sağlık Örgütü, yetişkinler için günde en az 30 dakika, haftanın en az beş günü fiziksel aktivite yapılmasını önermektedir.',
  },
  {
    title: 'Prediyabeti Öğrenelim',
    content:
      'Prediyabet, kan şekeri seviyelerinin normalin üzerinde ancak diyabet eşiğinin altında olduğu bir durumdur. Erken teşhis ve yaşam tarzı değişiklikleri ile diyabete geçiş önlenebilir.',
  },
  {
    title: 'Prediyabetin Komplikasyonları',
    content:
      'Tedavi edilmeyen prediyabet zamanla tip-2 diyabete dönüşebilir. Bunun yanı sıra kalp-damar hastalıkları, sinir hasarı ve böbrek sorunlarına yol açabilir.',
  },
  {
    title: 'Tanı ve Tedavi Yöntemleri',
    content:
      'Prediyabet tanısı açlık kan şekeri, OGTT veya HbA1c testleri ile konulur. Tedavide öncelikle yaşam tarzı değişiklikleri (diyet ve egzersiz) önerilir; gerektiğinde ilaç tedavisi uygulanır.',
  },
];

export default function BilgilendirmeScreen() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => setExpanded(expanded === idx ? null : idx);

  return (
    <View style={styles.container}>
      <AppHeader title="Bilgilendirme" />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {TOPICS.map((topic, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.card, expanded === idx && styles.cardExpanded]}
            onPress={() => toggle(idx)}
            activeOpacity={0.8}
          >
            <View style={styles.row}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.chevron}>{expanded === idx ? '▲' : '▼'}</Text>
            </View>
            {expanded === idx && (
              <Text style={styles.content}>{topic.content}</Text>
            )}
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
    ...CARD, paddingVertical: 14, paddingHorizontal: 16, marginBottom: 8,
  },
  cardExpanded: { borderLeftWidth: 3, borderLeftColor: COLORS.primary },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  topicTitle: { flex: 1, fontSize: 14, color: '#2C2C2C', fontWeight: '500', lineHeight: 20 },
  chevron: { fontSize: 12, color: COLORS.primary, marginLeft: 8 },
  content: { fontSize: 14, color: '#555', lineHeight: 21, marginTop: 10 },
});
