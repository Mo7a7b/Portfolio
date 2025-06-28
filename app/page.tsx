import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import TechStack from "@/components/features/TechStack";
import Projects from "@/components/features/Projects";
import About from "@/components/features/About";
import Contact from "@/components/features/Contact";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Body Section */}
      <Hero />
      {/* Tech Stack */}
      <TechStack />
      <hr />
      {/* Projects */}
      <Projects />
      <hr />
      {/* About */}
      <About />
      <hr />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
