import Navbar from "@/components/Navbar";
import Introduction  from "@/components/Introduction";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import FooterComponent from "@/components/Footer";



export default function Home() {
  
  return (
    <main>
      <Navbar />
      <hr className="text-on-secondary-fixed"/>
      <Introduction />
      <Skills />
      <Contact />
      <hr className="text-on-secondary-fixed"/>
      <FooterComponent />
    </main>
  );
}
