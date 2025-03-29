import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackContainer}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <p><strong>Total: {total}</strong></p>
      <p><strong>Positive feedback: {positivePercentage}%</strong></p>
    </div>
  );
}

export default Feedback;


