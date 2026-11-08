function EvidenceCard(props) {
    return (
         <ul>
               {props.caseEvidence.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                        <p>{el.source.sourceName}</p>
                        <p>{el.source.sourceReference}</p>
                        <p>{el.status}</p>
                        <p>{el.type}</p>
                        <ul>{el.tags.map(tag => <li key={tag.title}>{tag.title}</li>)}</ul>
                    </li>
                ))}
            </ul>
    );
}

export default EvidenceCard;