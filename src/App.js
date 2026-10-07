import MyInvestigations from "./components/MyInvestigations";
// import casesData from "./data/cases.json";
import evidenceData from "./data/evidence.json";
import { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Case from "./components/Case";
import CreateCase from "./pages/CreateCase";


function App() {
  const [cases, setCases] = useState([]);
  const[evidenceItems] = useState(evidenceData);

  const addCase = (caseItem) => {
    console.log("ADD CASE Triggered");
      setCases([caseItem, ...cases]);
  }

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases} />} />
      <Route path="/case/:id" element={<Case cases={cases} evidenceItems={evidenceItems} />}/>
      <Route path="cases" element={<CreateCase addCase={addCase} />} />
    </Routes>
  );
}

export default App;
