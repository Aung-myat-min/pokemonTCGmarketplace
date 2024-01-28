import fallbackFonts from "@/utils/style/fallbackFonts";
import { getDefaultMeta } from "@/utils/seo/generateMeta";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Container from "@/components/Container/Container";
import WhiteShadowUp from "@/components/common/WhiteShadow/WhiteShadowUp";

export const metadata = getDefaultMeta();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fallbackFonts.className}>
        <Navbar />
        <Container>{children}</Container>
        <WhiteShadowUp className="sticky bottom-0 z-30" />
      </body>
    </html>
  );
}
