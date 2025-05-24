import React, { useEffect } from "react";
import "./App.scss";
import "aos/dist/aos.css";
import Main from "./containers/Main";

function App() {
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: "ease-out"
      });
    });
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
