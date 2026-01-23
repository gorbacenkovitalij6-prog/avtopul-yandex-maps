import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Автопул — Яндекс Карты',
  description: 'Автопул, 410033, Саратовская область, г. Саратов, Шелковичная улица, д. 20/28 — отзывы, фото, время работы, телефон и адрес на карте',
  icons: {
    icon: [
      { url: '/yandex-icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/yandex-icon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
