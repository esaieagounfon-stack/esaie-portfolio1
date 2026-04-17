import { useState } from 'react';
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setShowContent(true)} />
      {showContent && (
        <div className="bg-black min-h-screen">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}
