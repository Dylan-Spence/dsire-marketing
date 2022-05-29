import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import What from "./components/What";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Landing />
        <About />
        <What />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
