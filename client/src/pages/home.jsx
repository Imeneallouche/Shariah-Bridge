import React, { useState } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
    </div>
  );
}
