import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floripa Guide",
  description: "Guía de lugares de Florianópolis",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
