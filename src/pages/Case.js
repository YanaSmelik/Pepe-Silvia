import {useParams} from "react-router-dom";
import { Outlet } from "react-router-dom";
import EvidenceCard from "../components/EvidenceCard";

function Case(props){
    const {id} = useParams();
    let caseItem = props.cases.find((item) => item.id === id);
    let caseEvidence = props.evidenceItems.filter((item) => item.caseId === id);
    

    return (
        <div>
            <h1>Case {caseItem.id}</h1>
            <p>Case Evidence:</p>
              <EvidenceCard caseEvidence={caseEvidence}/>
            <Outlet />
        </div>
    )
}

export default Case;