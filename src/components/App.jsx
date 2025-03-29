import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const newFeedback = { ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 };
      localStorage.setItem("feedback", JSON.stringify(newFeedback));
      return newFeedback;
    });
  };

  const resetFeedback = () => {
    const resetData = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetData);
    localStorage.setItem("feedback", JSON.stringify(resetData));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback 
          good={feedback.good} 
          neutral={feedback.neutral} 
          bad={feedback.bad} 
          total={totalFeedback} 
          positivePercentage={positiveFeedback} 
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
}

export default App;
