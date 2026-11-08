import styles from '../style/evidenceCard.module.css';

function EvidenceCard(props) {
    return (
         <ul className={styles.cardsContainer}>
               {props.caseEvidence.map((el) => (
                    <li key={el.id} className={styles.card}>
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