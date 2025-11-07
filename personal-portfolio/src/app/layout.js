import Navbar from "@/components/Navbar";
import ThemeProvider from "../theme/theme-provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
