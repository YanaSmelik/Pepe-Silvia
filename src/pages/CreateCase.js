import { useState } from "react";

function CreateCase(props) {
    const[title, setTtitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(props.addCase);
      
   

    const handleSubmit = () => {

     
        setTtitle(document.getElementById("title").value);
        setDescription(document.getElementById("description").value);
        const caseItem = {
            id: "8",
            title,
            description
        }
        props.addCase(caseItem);
    }


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
    </div>
  );
}

export default CreateCase;
