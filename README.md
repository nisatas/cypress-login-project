# Cypress Login Form E2E Project

Bu proje, React ile oluşturulmuş bir login formunun Cypress kullanılarak uçtan uca (E2E) test edilmesini amaçlamaktadır.

## 🚀 Proje Özellikleri
- React + Vite ile oluşturulmuş login formu
- Email, şifre ve KVKK/GDPR onayı validasyonları
- Tüm validasyonlar geçerli olmadan submit butonu aktif olmaz
- Başarılı giriş sonrası Success sayfasına yönlendirme
- Cypress ile E2E testler

## 🧪 Cypress Test Senaryoları
- ✅ Başarılı form doldurulduğunda submit edilebilmesi
- ❌ Geçersiz email girildiğinde hata mesajı gösterilmesi
- ❌ Email ve password hatalıyken birden fazla hata mesajı gösterilmesi
- ❌ Şartlar kabul edilmeden submit butonunun disabled olması

## 🛠 Kullanılan Teknolojiler
- React
- Vite
- React Router DOM
- Cypress

## ▶️ Projeyi Çalıştırma
```bash
npm install
npm run dev
