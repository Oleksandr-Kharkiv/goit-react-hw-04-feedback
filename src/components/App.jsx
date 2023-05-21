import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const options = ["good", "neutral", "bad"]

  const handleIncrement = e => {
    console.log(e);
    if(e.target.name === "good")setGood(prev => prev + 1);
    if(e.target.name  === "neutral")setNeutral(prev => prev + 1);
    if(e.target.name  === "bad")setBad(prev => prev + 1);
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleIncrement}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          { countTotalFeedback() ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}
        </Section>
      </>
    );

}
