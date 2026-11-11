import styles from "../style/evidenceCard.module.css";

function EvidenceCard(props) {
 const statusStyleClasses = {
      "Verified": styles.verified,
      "Unverified": styles.unverified,
        "Partially verified": styles.partiallyVerified,
       "False": styles.false,
        "Disputed": styles.disputed,
  } //TODO: fix values


  return (
    <ul className={styles.cardsContainer}>
      {props.caseEvidence.map((el) => (
        <li key={el.id} className={styles.card}>
          <div className={styles.header}>
            <h3 className={styles.title}>{el.title}</h3>
            <div className={styles.status}>
              <p className={statusStyleClasses[el.status]}>{el.status}</p>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{el.description}</p>
          </div>
          <p>{el.source.sourceName}</p>
          <p>{el.source.sourceReference}</p>

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
