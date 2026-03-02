import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { CARD } from '../constants/theme';

const FAQ = [
  {
    q: '1- Kan şekerinizi evde ölçebileceğinizi biliyor musunuz?',
    a: 'Kan şekerinizi glukometre ile ev ortamında ölçebilirsiniz. Yaklaşık 5 saniye içerisinde dijital alanda sonuç görünmektedir. Kan şekeri ölçerken ilk gelen kan pamukla silinmeli devamında gelen kan ölçüm için kullanılmalısınız.',
  },
  {
    q: '2- Prediyabet (gizli şeker) tehlikeli bir hastalık mıdır?',
    a: 'Kontrol altına alındıktan sonra prediyabet tehlikeli bir hastalık değildir. Hastalığı kontrol altında tutmanın bir diğer avantajı diyabete geçiş sürecinin önlenerek hastalık riskinin düşürülmesidir. Yaşam tarzı değişiklikleri prediyabet riskinin düşürülmesi için önemlidir. Dünya Sağlık Örgütü erişkinler için günde en az 30 dakika, haftanın en az beş günü olmak kaydıyla haftada minimum 150 dakika fiziksel aktivite yapılmasını önermektedir. Akdeniz diyetine bağlı bir beslenme sürdürülmesi yine düşük hastalık riski ile ilişkilendirilmiştir. Bu önerilere uyum sağlandığı taktirde prediyabet korkulacak bir hastalık olmayacaktır.',
  },
  {
    q: '3- Prediyabeti (gizli şeker) nasıl kontrol altına alabilirim?',
    a: 'Hastalığın kontrol altında tutulması sağlıklı yaşam biçimi davranışlarına uyum gösterme ile mümkündür. Bunlar; düzenli fiziksel aktivite, sağlıklı beslenme, kilo kontrolü, sigara ve alkol kullanımından kaçınma ile düzenli tıbbi kontrol olarak sıralanabilir.',
  },
  {
    q: '4- Prediyabette hangi besinleri tüketmeliyim?',
    a: 'Sebze ve meyve ağırlıklı bir Akdeniz tipi diyet önerilmektedir. Tam tahıllı ürünler, baklagiller, az yağlı protein kaynakları ve sağlıklı yağlar (zeytinyağı, avokado) tercih edilmelidir. Şekerli içecekler, işlenmiş gıdalar ve doymuş yağlardan uzak durulmalıdır.',
  },
  {
    q: '5- Prediyabette egzersiz ne kadar önemlidir?',
    a: 'Düzenli egzersiz, insülin direncini azaltır ve kan şekerini düşürür. Dünya Sağlık Örgütü önerileri doğrultusunda haftada en az 150 dakika orta yoğunluklu aerobik egzersiz (yürüyüş, bisiklet, yüzme gibi) yapılması önerilmektedir.',
  },
];

export default function SSSScreen() {
  return (
    <View style={styles.container}>
      <AppHeader title="S.S.S." />
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        {FAQ.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.question}>{item.q}</Text>
            <Text style={styles.answerLabel}>Cevap-</Text>
            <Text style={styles.answer}>{item.a}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  inner: { padding: 16, paddingTop: 12, paddingBottom: 30 },
  card: { ...CARD, paddingVertical: 16, paddingHorizontal: 16, marginBottom: 10 },
  question: { fontSize: 14, fontWeight: '700', color: '#2C2C2C', marginBottom: 8, lineHeight: 20 },
  answerLabel: { fontSize: 13, fontWeight: '700', color: '#C0392B', marginBottom: 4 },
  answer: { fontSize: 14, color: '#444', lineHeight: 22 },
});
