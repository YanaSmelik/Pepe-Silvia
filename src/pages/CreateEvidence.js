import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateEvidence(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [sourceReference, setSourceReference] = useState("");
  let { id } = useParams();

  const navigate = useNavigate();

  const goToMyInvestigations = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const evidence = {
      id: title, //TODO change
      caseId: id,
      title: title,
      description: description,
      source: {
        sourceName: sourceName,
        sourceReference: sourceReference,
      },
    };

    props.addEvidence(evidence);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Create Evidence:</h1>
      <form onSubmit={handleSubmit}>
        <label forhtml="title">Title:</label>
        <br></br>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br></br>
        <label forhtml="description">Description:</label>
        <br></br>
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br></br>
        <fieldset>
          <legend>Source:</legend>
          <label forhtml="sourceName">Name:</label>
          <input
            type="text"
            id="sourceName"
            name="Name"
            value={sourceName}
            onChange={(e) => setSourceName(e.target.value)}
          ></input>
          <br></br>
          <label forhtml="sourceReference">Reference:</label>
          <input
            type="text"
            id="sourceReference"
            name="sourceReference"
            value={sourceReference}
            onChange={(e) => setSourceReference(e.target.value)}
          ></input>
        </fieldset>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <input type="submit" value="Create"></input>
      </form>
      <button onClick={goToMyInvestigations}>My Investigations</button>
    </div>
  );
}

export default CreateEvidence;
