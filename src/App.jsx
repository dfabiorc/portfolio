import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Studies from "./components/Studies";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
//import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Experience/>
      <Studies/>
      <Contact/>
      <Footer/>
    </>
  )
}