import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="{styles.main}">
        <Hero />
    </main></>
  );
}
