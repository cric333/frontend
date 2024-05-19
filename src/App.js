import React from "react";
import { Routes, Route } from "react-router-dom";
import UpdateIdsForm from "./updateform";
import MainApp from "./dataComponemt";

const baseUrl = process.env.REACT_APP_BASE_URL;

export default function App() {
 
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/form" element={<UpdateIdsForm />} />
    </Routes>
  );
}