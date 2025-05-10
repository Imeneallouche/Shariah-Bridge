import "./App.css";

import Home from "./pages/home";
import Blockchain from "./pages/blockchain";
import AccAssistantPage from "./pages/AccountingAssistant";
import ReverseTransaction from "./pages/ReverseTransaction";
import StandardReview from "./pages/StandardReview";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blockchain" element={<Blockchain />} />
        <Route path="/AccountingAssistant" element={<AccAssistantPage />} />
        <Route path="/ReverseTransaction" element={<ReverseTransaction />} />
        <Route path="/StandardReview" element={<StandardReview />} />
      </Routes>
    </div>
  );
}

export default App;
