import {useParams} from "react-router-dom";

function Case(props){
    const {id} = useParams();
    let caseItem = props.cases.find((item) => item.id === id);
    let caseEvidence = props.evidenceItems.filter((item) => item.caseId === id);
    

    return (
        <div>
            <h1>Case {caseItem.id}</h1>
            <p>Case Evidence:</p>
               <ul>
               {caseEvidence.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Case;