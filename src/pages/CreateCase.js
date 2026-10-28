import { useNavigate } from "react-router-dom";

function CreateCase(props) {

  //todo: title and descripton to states
  const navigate = useNavigate();

  const goToMyInvestigations = () => {
    navigate("/");
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
     let titleInput = document.getElementById("title").value;
  let descriptonInput = document.getElementById("description").value;
    const caseItem = {
      //todo: turn values into states
      id: titleInput, //TODO change
      title: titleInput,
      description: descriptonInput,
    };
    
    props.addCase(caseItem);
    document.getElementById("title").value = ""; 
    document.getElementById("description").value = "";
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
