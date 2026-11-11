import styles from "../style/evidenceCard.module.css";

function EvidenceCard(props) {
  return (
    <ul className={styles.cardsContainer}>
      {props.caseEvidence.map((el) => (
        <li key={el.id} className={styles.card}>
          <h3 className={styles.title}>{el.title}</h3>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{el.description}</p>
          </div>
          <p>{el.source.sourceName}</p>
          <p>{el.source.sourceReference}</p>
          <p>{el.status}</p>
          <p>{el.type}</p>
          <ul>
            {el.tags.map((tag) => (
              <li key={tag.title}>{tag.title}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default EvidenceCard;
