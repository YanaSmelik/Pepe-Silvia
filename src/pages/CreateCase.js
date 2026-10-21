import { useNavigate } from "react-router-dom";

function CreateCase(props) {

  //todo: title and descripton to states
  //todo: clean form after submission
  const navigate = useNavigate();

  const goToMyInvestigations = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const caseItem = {
      id: document.getElementById("title").value, //TODO change
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };
    
    props.addCase(caseItem);
  };

  return (
    <div>
      <h1>Create Case:</h1>
      <form onSubmit={handleSubmit}>
        <label forhtml="title">Title:</label>
        <br></br>
        <input type="text" id="title" name="title"></input>
        <br></br>
        <label forhtml="description">Description:</label>
        <br></br>
        <input type="text" id="description" name="description"></input>
        <br></br>
        <br></br>
        <input type="submit" value="Create"></input>
      </form>
      <button onClick={goToMyInvestigations}>My Investigations</button>
    </div>
  );
}

export default CreateCase;
