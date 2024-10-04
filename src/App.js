import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import VisaProcess from "./components/VisaProcess";
import RealStories from "./components/RealStories";
import ChooseTripStudio from "./components/ChooseTripStudio";
import Steps from "./components/Steps";
import Started from "./components/Started";
import Footer from "./components/Footer";
import Discovery from "./components/Discovery";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <VisaProcess />
      <RealStories />
      <ChooseTripStudio />
      <Steps />
      <Started />
      {/* <Discovery /> */}
      <Footer />
    </>
  );
}

export default App;
