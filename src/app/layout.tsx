import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@components/providers/AntdRegistry';
import Providers from '@components/providers/Providers';

export const metadata: Metadata = {
  title: 'VIDE - Nền Tảng Học Trực Tuyến',
  description: 'Khám phá tri thức không giới hạn với nền tảng học trực tuyến hàng đầu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="font-sans min-h-screen bg-white antialiased">
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
