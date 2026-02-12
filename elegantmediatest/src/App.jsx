import Hero from "./components/Hero";
import Layout from "./layout/Layout";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Stories from "./components/Stories";
import Sustainability from "./components/Sustainability";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";


function App() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <Features/>
      <Stories/>
      <Sustainability/>
      <Brands/>
      <Gallery/>
    </Layout>
  );
}

export default App;
