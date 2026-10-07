import { Link, useNavigate } from "react-router-dom";

function MyInvestigations(props) {
    const navigate = useNavigate();

    const goToCreateCasePage = () => {
        navigate("/cases");
    }

    return (
        <div>
            <h1>My Investigations</h1>
            <button onClick={goToCreateCasePage}>Add Case</button>
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