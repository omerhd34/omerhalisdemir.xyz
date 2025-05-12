import Head from "next/head";
import { LanguageProvider } from "../components/LanguageContext/LanguageContext";
import Navbar from "../components/Navbar/index";
import Hero from "../components/Hero/index";
import About from "../components/About/index";
import Skills from "../components/Skills/index";
import Experience from "../components/Experience/index";
import Projects from "../components/Projects/index";
import Contact from "../components/Contact/index";
import Footer from "../components/Footer/index";
import Divider from "../components/Divider/Divider";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden max-w-full box-border">
        <Head>
          <title>Ömer Halis DEMİR | Full Stack Developer</title>
          <meta name="description" content="Full Stack Developer Portfolio" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </main>
        <Footer className="w-full" />
      </div>
    </LanguageProvider>
  );
}
