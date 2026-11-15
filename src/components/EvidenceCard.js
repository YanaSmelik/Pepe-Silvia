import styles from "../style/evidenceCard.module.css";

function EvidenceCard(props) {
  const statusStyleClasses = {
    Verified: styles.Verified,
    Unverified: styles.Unverified,
    "Partially verified": styles.PartiallyVerified,
    False: styles.False,
    Disputed: styles.Disputed,
  }; //TODO: fix style names, from small letter

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
          <p>{el.type}</p>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{el.description}</p>
          </div>
          <div className={styles.source}>
            <h4>Source:</h4>
            <p>
              <span>Name:</span> {el.source.sourceName}
            </p>
            <p>
              <span>Reference:</span> {el.source.sourceReference}
            </p>
          </div>
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
