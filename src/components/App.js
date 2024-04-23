import React from "react";
import NavBar from "./NavBar"; // Import NavBar component
import Home from "./Home"; // Import Home component
import About from "./About"; // Import About component

function App() {
  return (
    <div>
      <NavBar /> {/* Render NavBar component */}
      <Home /> {/* Render Home component */}
      <About /> {/* Render About component */}
    </div>
  );
}

export default App;
