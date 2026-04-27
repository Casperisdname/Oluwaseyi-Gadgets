import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import Hero from "../../component/Hero";
import Navbar from "../../component/Navbar";
import Products from "../../component/Products";
import Shop from "../../component/Shop";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shop />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
