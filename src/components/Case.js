import {useParams} from "react-router-dom"

function Case(props){
    const {id} = useParams();
    let caseItem = props.cases.find((item) => item.id === id);
    

    return (
        <div>
            <h1>Case {caseItem.id}</h1>
            <p>Case Description</p>
        </div>
    )
}

export default Case;