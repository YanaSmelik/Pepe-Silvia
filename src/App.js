import MyInvestigations from "./pages/MyInvestigations";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Case from "./pages/Case";
import CreateCase from "./pages/CreateCase";
import CreateEvidence from "./pages/CreateEvidence";

function App() {
  const [cases, setCases] = useState([]);
  const [evidenceItems, setEvidenceItems] = useState([]);
  const [tags, setTags] = useState([]);

  const addCase = (caseItem) => {
    setCases([caseItem, ...cases]);
  };

  const addEvidence = (evidence) => {
    setEvidenceItems([evidence, ...evidenceItems]);
  };

  const addTag = (tag) => {
    if (!tags.some( item => item.title.toLowerCase() === tag.title.toLowerCase())) {
      setTags([tag, ...tags]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<MyInvestigations cases={cases} />} />
      <Route
        path="/case/:id"
        element={<Case cases={cases} evidenceItems={evidenceItems} />}
      >
        {/* //todo : change to a + button */}
        <Route path="" element={<CreateEvidence addEvidence={addEvidence} addTag={addTag} tags={tags}/>} />
      </Route>
      <Route path="cases" element={<CreateCase addCase={addCase} />} />
    </Routes>
  );
}

export default App;

//TODO: To create evidence add: tags, attachment, notes(?)
//todo: tags: [] of tags per evidence item, a pool of tags in App
//todo: tags can be removed
//todo: styling of the evidence card: fix text-overflow for description. Requires its own block