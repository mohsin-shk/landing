import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SmallBits from "./components/SmallBits";
import MakeOwn from "./components/MakeOwn";
import SellAnything from "./components/SellAnything";
import T1 from "./components/Testmonials/T1";
import T2 from "./components/Testmonials/T2";
import SellAnyone from "./components/SellAnyone";
import SellAnywhere from "./components/SellAnywhere";
import T3 from "./components/Testmonials/T3";
import AmountIncome from "./components/AmountIncome";
import StartFree from "./components/StartFree";
import University from "./components/University";
import Sponsor from "./components/Sponsor";
import Share from "./components/Share";
import Footer from "./components/Footer";
import GreatIdeas from "./components/GreatIdeas";
import Discover from "./components/discover/Discover";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
      <GreatIdeas />
      <SmallBits />
      <MakeOwn />
      <SellAnything />
      <T1 />
      <SellAnyone />
      <T2 />
      <SellAnywhere />
      <T3 />
      <AmountIncome />
      <StartFree />
      <University />
      <Sponsor />
      <Share />
      <Footer />
    </div>
  );
}

export default App;
