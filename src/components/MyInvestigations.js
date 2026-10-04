import { Link } from "react-router-dom";

function MyInvestigations(props) {
   
    return (
        <div>
            <h1>My Investigations</h1>
            <ul>
               {props.cases.map((el) => (
                <Link to={`/case/${el.id}`}>
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                    </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default MyInvestigations;