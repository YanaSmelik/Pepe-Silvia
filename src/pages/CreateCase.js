import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateCase(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  //todo: title and descripton to states
  const navigate = useNavigate();

  const goToMyInvestigations = () => {
    navigate("/");
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const caseItem = {
      id: title, //TODO change
      title: title,
      description: description,
    };
    
    props.addCase(caseItem);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>Create Case:</h1>
      <form onSubmit={handleSubmit}>
        <label forhtml="title">Title:</label>
        <br></br>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <br></br>
        <label forhtml="description">Description:</label>
        <br></br>
        <textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <br></br>
        <br></br>
        <input type="submit" value="Create"></input>
      </form>
      <button onClick={goToMyInvestigations}>My Investigations</button>
    </div>
  );
}

export default CreateCase;
