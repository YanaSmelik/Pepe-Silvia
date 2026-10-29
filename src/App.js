import MyInvestigations from "./components/MyInvestigations";
import evidenceData from "./data/evidence.json";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Case from "./components/Case";
import CreateCase from "./pages/CreateCase";
// import Evidence from  "./components/Evidence";
import CreateEvidence from "./pages/CreateEvidence";

function App() {
  const [cases, setCases] = useState([]);
  const [evidenceItems, setEvidenceItems] = useState(evidenceData);

  const addCase = (caseItem) => {
    setCases([caseItem, ...cases]);
  };

  const addEvidence = (evidence) => {
    console.log("ADD EVIDENCE Triggered");
    console.log(evidence);
    console.log(evidenceItems);
    setEvidenceItems([evidence, ...evidenceItems]);
  };

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases} />} />
      <Route
        path="/case/:id"
        element={<Case cases={cases} evidenceItems={evidenceItems} />}>
        {/* //todo : change to a + button */}
          <Route path="" element={<CreateEvidence addEvidence={addEvidence} />} /> 
          
        </Route>
      <Route path="cases" element={<CreateCase addCase={addCase} />} />
      
    </Routes>
  );
}

export default App;

//TODO: add Add Evidence functionality to Case page