import "./App.css";

import Home from "./pages/home";
import Blockchain from "./pages/blockchain";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blockchain" element={<Blockchain />} />
      </Routes>
    </div>
  );
}

export default App;
