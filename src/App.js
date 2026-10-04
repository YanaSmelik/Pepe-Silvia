import MyInvestigations from "./components/MyInvestigations";
import casesData from "./data/cases.json";
import { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Case from "./components/Case";

function App() {
  const [cases] = useState(casesData);

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases} />} />
      <Route path="/case/:id" element={<Case cases={cases} />}/>
    </Routes>
  );
}

export default App;
