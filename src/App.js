import React from "react";
import { Routes, Route } from "react-router-dom";
import UpdateIdsForm from "./updateform";
import UpdateIdsFormCricket from "./updateformcric";
import UpdateIdsFormYoutube from "./updateformyoutube";
import MainApp from "./dataComponemt";
import CricketApp from "./dataComponemtcricket";
import YoutubeApp from "./dataComponemtyoutube";
export default function App() {
 
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/cricket" element={<CricketApp />} />
      <Route path="/youtube" element={<YoutubeApp />} />
      <Route path="/form" element={<UpdateIdsForm />} />
      <Route path="/updatecricket" element={<UpdateIdsFormCricket/>} />
      <Route path="/updateyoutube" element={<UpdateIdsFormYoutube/>} />
    </Routes>
  );
}