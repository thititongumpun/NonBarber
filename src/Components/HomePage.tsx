import CTA from "./CTA";
import Header from "./Header";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero */}
      <Hero />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default HomePage;
