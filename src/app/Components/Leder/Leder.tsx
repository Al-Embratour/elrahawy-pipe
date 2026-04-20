import Hero from "./Hero";
import Features from "./Features";
import Stats from "./Stats";
import CTA from "./CTA";
import Services from "./Services";
import Partners from "./Partners";
import FAQ from "./FAQ";



const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Services/>
      {/* <Partners /> */}
      <FAQ/>
      <CTA />
    </>
  );
};

export default Home;