import {useParams} from "react-router-dom";
import { Outlet } from "react-router-dom";

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
                        <p>{el.source.sourceName}</p>
                        <p>{el.source.sourceReference}</p>
                        <p>{el.status}</p>
                        <p>{el.type}</p>
                        {/* {el.tags.map(tag => {
                            <p key={tag.id}>tag.title</p>
                        })} */}
                        <ul>{el.tags.map(tag => <li key={tag.title}>{tag.title}</li>)}</ul>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

export default Case;