import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim Tim Costa Verde - O Canal da Costa Verde",
  description: "O canal de humor e fofocas da Costa Verde! Paraty, Angra dos Reis, Mangaratiba... tudo que rola por aqui você fica sabendo primeiro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="font-pacifico-body">
        {children}
      </body>
    </html>
  );
}