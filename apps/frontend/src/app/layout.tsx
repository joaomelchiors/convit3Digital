import type { Metadata } from "next";
import "./globals.css";

//importar fonts do google -> declarar ela -> passar ele para o return
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "convit3Digital",
  description: "Projeto da FormaçãoDev (escola.formacao.dev)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
