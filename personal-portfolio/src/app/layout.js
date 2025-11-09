import Navbar from "@/components/Navbar";
import ThemeProvider from "../theme/theme-provider";
import "./globals.css";
export const metadata = {
  title: "Cata Space | Personal Portfolio in NextJS",
  description: "Explore my Portfolio, with projects in AngularJS, React, NextJS, UI/UX",
  keywords: ["Web Developer", "React", "Next.js", "TailwindCSS", "Portfolio", "UI/UX"],
  authors: [{ name: "Catalin" }],
  openGraph: {
    title: "Catalin Portfolio",
    description: "Check out my projects and skills in web development and design.",
    url: "https://cata-space.vercel.app/",
    siteName: "Cata Space",
    images: [{ url: "/me.jpg", width: 600, height: 600 }], //imagina care apare cand dai pe social media
    locale: "en_US",
    type: "website",
  },
};
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
