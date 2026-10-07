import MyInvestigations from "./components/MyInvestigations";
import casesData from "./data/cases.json";
import evidenceData from "./data/evidence.json";
import { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Case from "./components/Case";


function App() {
  const [cases, setCases] = useState(casesData);
  const[evidenceItems] = useState(evidenceData);

  const addCases = (caseItem) => {
    console.log("ADD CASE Triggered");
      setCases([caseItem, ...cases]);
  }

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases}  addCases={addCases}/>} />
      <Route path="/case/:id" element={<Case cases={cases} evidenceItems={evidenceItems} />}/>
    </Routes>
  );
}

export default App;
