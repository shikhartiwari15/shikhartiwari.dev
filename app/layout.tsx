import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shikhar Tiwari — Portfolio (Building)',
  description:
    'Portfolio of Shikhar, AI/ML engineer working across embedded systems, computer vision and industrial IoT. Site under construction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
