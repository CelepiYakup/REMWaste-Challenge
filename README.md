# REMWaste Challenge

author: [Senin Adın]

Bu proje, REMWaste için hazırlanmış bir demo uygulamadır. Kullanıcılar konteyner (skip) seçimi yapabilir, filtreleyebilir ve detaylarını görüntüleyebilir. Uygulama, modern bir arayüz ve kolay kullanılabilirlik hedeflenerek geliştirilmiştir.

---

## Geliştirme Ortamı Kurulumu

Projeyi çalıştırmak için bilgisayarınızda Node.js ve npm kurulu olmalıdır. Eğer kurulu değilse, [Node.js](https://nodejs.org/) sitesinden indirebilirsiniz.

Proje dosyalarını indirdikten sonra terminali proje klasöründe açıp aşağıdaki komutu çalıştırın:

```sh
npm install
```

Projeyi başlatmak için:

```sh
npm run dev
```

Ardından tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine giderek projeyi görebilirsiniz.

---

## Kullanılan Teknolojiler

- React
- Vite
- TypeScript
- Tailwind CSS
- ESLint

---

## Klasör Yapısı

Proje aşağıdaki gibi yapılandırılmıştır:

```
frontend/                Projenin kök klasörü
│
├── public/              Statik dosyalar (görseller, favicon, vs.)
│   └── images/          Projede kullanılan konteyner görselleri
│
├── src/                 Ana kaynak kodları
│   ├── assets/          Görseller, ikonlar vb. kaynaklar
│   ├── components/      Tekrar kullanılabilir arayüz bileşenleri
│   ├── hooks/           Özel React hook'ları
│   ├── pages/           Sayfa bileşenleri
│   ├── service/         API ve veri servisleri
│   ├── types/           Tip tanımlamaları (TypeScript)
│   ├── App.tsx          Ana uygulama bileşeni
│   ├── main.tsx         Uygulamanın giriş noktası
│   └── vite-env.d.ts    Vite için tip tanımlamaları
│
├── package.json         Proje bağımlılıkları ve scriptler
├── tsconfig.json        TypeScript yapılandırması
├── vite.config.ts       Vite yapılandırması
└── README.md            Proje dokümantasyonu
```

---

## Ek Açıklamalar

- Tüm API istekleri `src/service/` klasöründe tanımlanmıştır.
- Tailwind CSS ile modern ve responsive bir arayüz sağlanmıştır.
- Proje, Vite ile hızlı geliştirme ve derleme deneyimi sunar.
- ESLint ile kod kalitesi ve tutarlılığı korunur.

---

Herhangi bir sorunla karşılaşırsanız veya katkıda bulunmak isterseniz, lütfen bir issue açın veya pull request gönderin.
