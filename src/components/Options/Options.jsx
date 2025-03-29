import styles from "./Options.module.css"

import clsx from 'clsx';


function Options({ updateFeedback, resetFeedback, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button className={clsx(styles.good, styles.button)} onClick={() => updateFeedback("good")}>Good</button>
      <button className={clsx(styles.neutral, styles.button)} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={clsx(styles.bad, styles.button)} onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback} className={clsx(styles.reset, styles.button)}>Reset</button>}
    </div>
  );
}

export default Options;
