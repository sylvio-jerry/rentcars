import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default App;
