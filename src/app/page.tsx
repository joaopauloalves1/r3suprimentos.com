import Footer from "./components/Footer";
import Header from "./components/Header";
import Second from "./components/Second";
import SectionFour from "./components/SectionFour";
import SectionHero from "./components/SectionHero";
import ProductCard from "./components/SectionProducts";
import SectionTree from "./components/SectionTree";


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <SectionHero />
      <Second />
      <SectionTree />
      <ProductCard />
      <SectionFour />
      {/* <Footer /> */}
    </>
  );
}
