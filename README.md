# PREDIABET — Prediyabet Yönetim Mobil Uygulaması

> Prediyabetli bireylere sağlıklı yaşam biçimi kazandırmak ve diyabete geçişi önlemek amacıyla geliştirilmiş mobil sağlık uygulaması.

---

## Hızlı Erişim

| | Bağlantı |
|---|---|
| 📱 **APK (Android)** | [app-release.apk](https://github.com/cerenazr/Prediabet/releases/download/v1.0.0/app-release.apk) |
| 🎬 **Demo Video** | [YouTube'da İzle](https://youtube.com/shorts/0Bueeef7ooA?feature=share) |
| 💻 **GitHub Repo** | [cerenazr/Prediabet](https://github.com/cerenazr/Prediabet) |

---

## İçindekiler

- [Uygulama Hakkında](#uygulama-hakkında)
- [Özellikler](#özellikler)
- [Demo Video](#demo-video)
- [APK İndirme](#apk-i̇ndirme)
- [Ekranlar](#ekranlar)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Teknoloji Yığını](#teknoloji-yığını)
- [Veri Modelleri](#veri-modelleri)
- [Geliştirici Notları](#geliştirici-notları)

---

## Uygulama Hakkında

**PREDIABET (Prediyabe-TR)**, Kütahya Sağlık Bilimleri Üniversitesi bünyesinde geliştirilmiş bir mobil sağlık uygulamasıdır. Uygulama, prediyabetli (gizli şekerli) bireylere:

- Diyabet riski hakkında bilgi sunmayı,
- Sağlıklı yaşam biçimi davranışları kazandırmayı,
- Kişisel sağlık verilerini takip etmeyi (BKİ, adım sayısı, beslenme),
- Diyabete geçiş riskini ölçmeyi (FINDRISC anketi)

amaçlamaktadır.

---

## Özellikler

| Özellik | Açıklama |
|---------|----------|
| BKİ Hesaplama | Boy ve kilo girişiyle anlık BKİ hesabı, tarihli geçmiş kaydı |
| Adımsayar | Cihazın yerleşik pedometre sensörüyle günlük adım takibi |
| Haftalık Adım Raporu | Son 7 günün görsel bar grafik özeti |
| Besin Ekle | Önerilen/kaçınılması gereken besin kategorilerinden günlük seçim |
| FINDRISC Anketi | Finlandiya Tip-2 Diyabet Risk Anketi (8 soruluk, puanlı) |
| Son Testler | Tamamlanan tüm anketlerin tarih ve risk düzeyiyle listesi |
| Bilgilendirme | Prediyabet, komplikasyonlar, tedavi hakkında akordeon içerik |
| S.S.S. | Sık sorulan sorular ve uzman yanıtları |
| İletişim | Telefon, e-posta, WhatsApp ve web sitesi derin bağlantıları |
| Hakkımızda | Uygulama ve geliştirici ekip hakkında bilgi |
| Profil | Ad, telefon ve şifre düzenleme |
| Çevrimdışı Çalışma | Tüm veriler cihazda yerel olarak saklanır, internet gerekmez |

---

## Ekranlar

### 1. Giriş (Login)
Kullanıcı adı, telefon ve şifre ile uygulamaya giriş yapılır. Veriler cihazda yerel olarak saklanır. Daha önce giriş yapılmışsa doğrudan Ana Menü'ye yönlendirilir.

### 2. Ana Menü (Home)
Uygulamanın merkez noktası. 5 satır × 2 sütun grid düzeninde 10 modüle erişim sağlar:

```
┌─────────────────┬─────────────────┐
│     Profil      │  Bilgilendirme  │
├─────────────────┼─────────────────┤
│  BKİ Hesaplama  │   Ön Testler    │
├─────────────────┼─────────────────┤
│   Son Testler   │    İletişim     │
├─────────────────┼─────────────────┤
│   Hakkımızda    │     S.S.S.      │
├─────────────────┼─────────────────┤
│   Besin Ekle    │   Adımsayar     │
└─────────────────┴─────────────────┘
```

### 3. Profil
- Ad Soyad, Telefon, Şifre alanları düzenlenebilir.
- "Profili Güncelle" butonu ile değişiklikler kaydedilir.

### 4. BKİ Hesaplama
- Kilo (kg) ve Boy (cm) girilerek BKİ hesaplanır.
- Formül: `BKİ = Kilo / (Boy(m))²`
- Her hesaplama tarih ile birlikte geçmişe eklenir.
- Geçmiş kayıtlar silinebilir (çöp kutusu ikonu).

**BKİ Değerlendirme:**
| BKİ Aralığı | Durum |
|-------------|-------|
| < 18.5 | Zayıf |
| 18.5 – 24.9 | Normal |
| 25 – 29.9 | Fazla Kilolu |
| ≥ 30 | Obez |

### 5. Besin Ekle
Prediyabet yönetiminde dikkat edilmesi gereken besin kategorilerinin listesi. Kullanıcı ilgili kategorileri seçerek "Kaydet" ile günlük besin kaydı oluşturur.

**Listede yer alan kategoriler:**
- Çavdar unu ve kepekli ekmek
- Balık Havyarı
- Et ve mantar suyu bazlı yemekler
- Yüksek yağlı süt ürünleri
- Bitkisel çaylar (siyah, yeşil, ıhlamur vb.)
- Az yağlı balıklar (fırında)
- Yağda konserve balık
- Füme ve tuzlu balık
- Sütlü tatlılar, dondurma, reçel
- İç yağ ve yağlı balık türleri

### 6. Adımsayar
- Telefonun yerleşik hareket sensörüyle o güne ait toplam adım sayısını gösterir.
- "Bugünü Kaydet" butonu ile anlık değer geçmişe eklenir.
- Geçmiş kayıtlar tarih ve adım sayısıyla listelenir.
- **"Haftalık Adımlarım"** butonuna basılarak haftalık özet görünümüne geçilir.

### 7. Haftalık Adımlarım
- Son 7 günün adım verisi bar grafik olarak gösterilir.
- Haftalık toplam ve günlük ortalama özeti sunulur.

### 8. Bilgilendirme
Akordeon (aç/kapat) formatında 7 konu başlığı:
1. Prediyabe-TR mobil uygulaması nedir?
2. Uygulamanın hedefleri nelerdir?
3. Tasarımcılar kimlerdir?
4. Sağlıklı Yaşam
5. Prediyabeti Öğrenelim
6. Prediyabetin Komplikasyonları
7. Tanı ve Tedavi Yöntemleri

### 9. Ön Testler — FINDRISC Anketi
**Finlandiya Tip-2 Diyabet Risk Anketi (FINDRISC)**

8 bölümlü, puanlı anket:

| Soru | Seçenekler | Puan |
|------|-----------|------|
| Yaş | <45 / 45-54 / 55-64 / >64 | 0/2/3/4 |
| BKİ | <25 / 25-30 / >30 kg/m² | 0/1/3 |
| Bel Çevresi | <80 / 80-88 / >88 cm | 0/3/4 |
| Fiziksel Aktivite | Evet / Hayır | 0/2 |
| Sebze-Meyve | Her gün / Bazen | 0/1 |
| Hipertansiyon İlacı | Hayır / Evet | 0/2 |
| Yüksek kan şekeri geçmişi | Hayır / Evet | 0/5 |
| Ailede diyabet | Yok / 2. derece / 1. derece | 0/3/5 |

**Risk Sınıflandırması:**
| Toplam Puan | Risk Düzeyi |
|-------------|------------|
| 0 – 6 | Düşük Risk |
| 7 – 11 | Orta Risk |
| 12 – 14 | Yüksek Risk |
| ≥ 15 | Çok Yüksek Risk |

Sonuç tarih ve risk etiketi ile Son Testler ekranına kaydedilir.

### 10. Son Testler
Tamamlanmış tüm FINDRISC anket sonuçlarının tarih, puan ve renk kodlu risk etiketi ile listesi.

### 11. İletişim
Tıklanabilir iletişim kartları:
- **Telefon** → Telefon uygulamasını açar
- **E-Posta** → Mail uygulamasını açar
- **Website** → Tarayıcıda açar
- **WhatsApp ile yaz** → WhatsApp'ı açar
- **Uzmana sor** → Mail uygulamasını açar

### 12. Hakkımızda
Uygulamanın amacı ve geliştirici ekip hakkında açıklayıcı metin ve görseller.

### 13. S.S.S. (Sık Sorulan Sorular)
Uzman yanıtları ile soru-cevap formatında 5 konu:
1. Kan şekeri evde nasıl ölçülür?
2. Prediyabet tehlikeli midir?
3. Prediyabet nasıl kontrol altına alınır?
4. Hangi besinler tüketilmelidir?
5. Egzersizin rolü nedir?

---

## Kurulum ve Çalıştırma

### Gereksinimler
- [Node.js](https://nodejs.org/) 18 veya üzeri
- [Git](https://git-scm.com/)
- Telefonda **Expo Go** uygulaması ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

### Adım 1 — Projeyi İndirin

```bash
git clone <repo-url>
cd prediabet
```

veya ZIP olarak indirdiyseniz:

```bash
cd D:\Mobile\prediabet
```

### Adım 2 — Bağımlılıkları Yükleyin

```bash
npm install
```

### Adım 3 — Uygulamayı Başlatın

```bash
npx expo start
```

Terminalde bir QR kodu görünür.

### Adım 4 — Telefonda Açın

**Android:**
1. Expo Go uygulamasını açın
2. "Scan QR code" butonuna basın
3. Terminaldeki QR kodu okutun

**iOS:**
1. Telefon kamerasını açın
2. QR kodu okutun
3. Çıkan bildirime dokunun → Expo Go'da açılır

> Telefon ve bilgisayarın **aynı Wi-Fi ağında** olması gerekir.

### Alternatif: Android Emülatör

```bash
npx expo start --android
```

Android Studio ve bir AVD (sanal cihaz) kurulu olmalıdır.

---

## Proje Yapısı

```
prediabet/
│
├── App.js                          # Uygulama giriş noktası
├── app.json                        # Expo konfigürasyonu
├── package.json
│
├── assets/                         # İkon, splash görseller
│
└── src/
    ├── constants/
    │   └── theme.js                # Renkler, kart stili, buton stili
    │
    ├── storage/
    │   └── index.js                # AsyncStorage CRUD işlemleri
    │
    ├── components/
    │   ├── AppHeader.js            # Kırmızı header (geri + logout)
    │   ├── Card.js                 # Beyaz yuvarlak kart
    │   └── CTAButton.js            # Tam genişlik kırmızı buton
    │
    ├── navigation/
    │   └── AppNavigator.js         # Stack Navigator tanımları
    │
    └── screens/
        ├── LoginScreen.js
        ├── HomeScreen.js
        ├── ProfilScreen.js
        ├── BKIHesaplamaScreen.js
        ├── BesinEkleScreen.js
        ├── AdimsayarScreen.js
        ├── HaftalikAdimlarScreen.js
        ├── BilgilendirmeScreen.js
        ├── HakkimizdaScreen.js
        ├── IletisimScreen.js
        ├── FindriskScreen.js
        ├── SonTestlerScreen.js
        └── SSSScreen.js
```

---

## Teknoloji Yığını

| Paket | Versiyon | Kullanım |
|-------|----------|----------|
| React Native | 0.76 | Mobil uygulama çatısı |
| Expo SDK | 55 | Geliştirme ortamı ve native API'ler |
| @react-navigation/stack | 7.x | Ekranlar arası geçiş |
| @react-native-async-storage | 2.x | Çevrimdışı veri saklama |
| expo-sensors (Pedometer) | 14.x | Adım sayar sensörü |
| expo-linking | 7.x | Telefon/mail/WhatsApp derin bağlantıları |

---

## Veri Modelleri

Tüm veriler cihazda `AsyncStorage`'da JSON formatında saklanır. İnternet bağlantısı gerekmez.

```js
// Kullanıcı
User: {
  name: string,      // Ad Soyad
  phone: string,     // Telefon
  password: string   // Şifre
}

// BKİ Kaydı
BMIRecord: {
  value: string,   // "25.34"
  date: string     // "02.03.2026"
}

// Adım Kaydı
StepRecord: {
  count: number,   // 8542
  date: string     // "02.03.2026"
}

// Besin Günlüğü
FoodLog: {
  categories: string[],  // seçilen kategori listesi
  date: string
}

// Anket Sonucu
SurveyResult: {
  type: "FINDRISC",
  score: number,       // 0–26 arası
  risk: string,        // "Düşük Risk" | "Orta Risk" | ...
  date: string
}
```

**AsyncStorage Anahtarları:**

| Anahtar | İçerik |
|---------|--------|
| `prediabet_user` | Profil bilgileri |
| `prediabet_bmi_history` | BKİ geçmişi (dizi) |
| `prediabet_step_history` | Adım geçmişi (dizi) |
| `prediabet_food_logs` | Besin günlükleri (dizi) |
| `prediabet_survey_results` | Anket sonuçları (dizi) |

---

## Geliştirici Notları

### Renk Paleti

| Token | Değer | Kullanım |
|-------|-------|---------|
| Primary | `#C0392B` | Header, butonlar, vurgular |
| Background | `#F5F5F5` | Ekran arka planı |
| Card | `#FFFFFF` | Kart arka planı |
| Text | `#2C2C2C` | Ana metin |
| TextLight | `#666666` | İkincil metin |

### Adımsayar Notu

`expo-sensors` Pedometer API'si fiziksel cihazlarda çalışır. Emülatörde adım sayısı 0 görünür. Gerçek telefonda test edilmesi önerilir. iOS'ta `NSMotionUsageDescription` izninin `app.json`'a eklenmesi gerekebilir:

```json
"ios": {
  "infoPlist": {
    "NSMotionUsageDescription": "Adım sayınızı takip etmek için hareket sensörüne erişim gereklidir."
  }
}
```

### Gerçek Görsel Eklemek (Hakkımızda)

[HakkimizdaScreen.js](src/screens/HakkimizdaScreen.js) içindeki placeholder `View`'ları gerçek görselle değiştirin:

```js
import { Image } from 'react-native';

<Image
  source={require('../../assets/hakkimizda1.jpg')}
  style={{ width: '100%', height: 180, borderRadius: 12, marginBottom: 14 }}
  resizeMode="cover"
/>
```

### Yeni Ekran Eklemek

1. `src/screens/YeniEkran.js` oluşturun
2. `src/navigation/AppNavigator.js` içine `<Stack.Screen>` ekleyin
3. `HomeScreen.js` içindeki `SCREEN_MAP`'e ekleyin

---

## Demo Video

Uygulamanın çalışır hali YouTube'da yayınlanmıştır:

> 🎬 **[YouTube Demo Videosu](https://youtube.com/shorts/0Bueeef7ooA?feature=share)**

Video içeriği:
- Giriş ekranı
- Ana Menü gezintisi
- BKİ hesaplama ve geçmiş görüntüleme
- FINDRISC anket akışı ve sonuç
- Adımsayar ve haftalık özet
- İletişim derin bağlantıları

---

## APK İndirme

Android cihazlara doğrudan kurulum için:

> 📥 **[app-release.apk](https://github.com/cerenazr/Prediabet/releases/download/v1.0.0/app-release.apk)** — Release build (Gradle, 64MB)

### APK'yı Manuel Kurmak İçin

1. APK dosyasını telefona indirin
2. **Ayarlar → Güvenlik → Bilinmeyen Kaynaklara İzin Ver** seçeneğini açın
3. APK dosyasına dokunarak kurulumu başlatın

> **Not:** Google Play üzerinden dağıtılmadığından cihazda "Bilinmeyen Kaynak" iznine ihtiyaç duyar.

---

## Yerel Geliştirme Ortamı Kurulumu

### Seçenek A — Expo Go ile Hızlı Test (Önerilen)

```bash
# 1. Repoyu klonla
git clone <repo-url>
cd prediabet

# 2. Bağımlılıkları yükle
npm install

# 3. Uygulamayı başlat
npx expo start
```

Telefonda **Expo Go** uygulamasını açıp QR kodu okutun.
Telefon ve bilgisayarın **aynı Wi-Fi'da** olması gerekir.

### Seçenek B — Android Studio ile Native Build

**Gereksinimler:**
- [Node.js](https://nodejs.org/) 18+
- [Android Studio](https://developer.android.com/studio) (Hedgehog veya üzeri)
- Android SDK 34
- JDK 17

**Kurulum Adımları:**

```bash
# 1. Repoyu klonla
git clone <repo-url>
cd prediabet

# 2. Bağımlılıkları yükle
npm install

# 3. Native Android projesini oluştur (android/ klasörü)
npx expo prebuild --platform android

# 4. Android Studio'da aç
# android/ klasörünü Android Studio'da "Open Project" ile açın
# Gradle sync tamamlanana kadar bekleyin

# 5. Release APK oluştur
cd android
./gradlew assembleRelease

# APK çıktısı:
# android/app/build/outputs/apk/release/app-release.apk
```

**Emülatör ile Çalıştırma:**

1. Android Studio → Device Manager → Create Virtual Device
2. Pixel 6 (API 34) seç → İndir → Başlat
3. Terminalde:
```bash
npx expo run:android
```

**Fiziksel Cihaz ile Çalıştırma:**

1. Telefonda **USB Hata Ayıklama** açın (Ayarlar → Geliştirici Seçenekleri)
2. USB ile bağlayın
3. `adb devices` ile cihazın göründüğünü doğrulayın
4. `npx expo run:android` çalıştırın

---

## Lisans

Bu uygulama akademik araştırma amacıyla geliştirilmiştir. Ticari kullanım için geliştirici ekiple iletişime geçiniz.
