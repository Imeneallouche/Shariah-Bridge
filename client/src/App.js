import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Blockchain from "./pages/blockchain";
import Assistant from "./pages/Assistant";
import ChatInterface from "./pages/Chat";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import ContractsGenerator from "./pages/ContractsGenerator";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blockchain" element={<Blockchain />} />
        <Route path="/Assistant" element={<Assistant />} />
        <Route path="/Assistant/Chat" element={<ChatInterface />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/New" element={<NewProduct />} />
        <Route path="/ContractsGenerator" element={<ContractsGenerator />} />
      </Routes>
    </div>
  );
}

export default App;
