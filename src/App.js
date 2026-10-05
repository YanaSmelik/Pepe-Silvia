import MyInvestigations from "./components/MyInvestigations";
import casesData from "./data/cases.json";
import evidenceData from "./data/evidence.json";
import { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Case from "./components/Case";


function App() {
  const [cases] = useState(casesData);
  const[evidenceItems] = useState(evidenceData);

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases}  />} />
      <Route path="/case/:id" element={<Case cases={cases} evidenceItems={evidenceItems} />}/>
    </Routes>
  );
}

export default App;
