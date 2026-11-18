import styles from "../style/evidenceCard.module.css";
import image from "../media/icons/image.svg";
import video from "../media/icons/video.svg";
import article from "../media/icons/article.svg";
import document from "../media/icons/document.svg";
import socialPost from "../media/icons/socialmedia.svg";
import audio from "../media/icons/audio.svg";
import map from "../media/icons/map.svg";

function EvidenceCard(props) {
  const statusStyleClasses = {
    Verified: styles.Verified,
    Unverified: styles.Unverified,
    "Partially verified": styles.PartiallyVerified,
    False: styles.False,
    Disputed: styles.Disputed,
  }; //TODO: fix style names, from small letter

  const typeIconsSrc = {
    Image: image,
    Video: video,
    Article: article,
    Document: document,
    "Social post": socialPost,
    Audio: audio,
    Map: map,
  };

  return (
    <ul className={styles.cardsContainer}>
      {props.caseEvidence.map((el) => (
        <li key={el.id} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <img src={typeIconsSrc[el.type]}></img>
              <h3 className={styles.title}>{el.title}</h3>
            </div>
            <div className={styles.status}>
              <p className={statusStyleClasses[el.status]}>{el.status}</p>
            </div>
          </div>

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
