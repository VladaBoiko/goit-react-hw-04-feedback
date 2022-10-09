import { useState } from 'react';

import { StatisticItems } from 'components/StatistycItems/StatisticItems';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { NotificationMsg } from './NotificationMsg/NotificationMsg';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const statisticGoodCounter = () => {
    setGood(state => state + 1);
  };
  const statisticNeutralCounter = () => {
    setNeutral(state => state + 1);
  };
  const statisticBadCounter = () => {
    setBad(state => state + 1);
  };
  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const positive = good * 100;
    if (total === 0) {
      return 0;
    }
    return Math.round(positive / total);
  };

  return (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={[
            statisticGoodCounter,
            statisticNeutralCounter,
            statisticBadCounter,
          ]}
        ></FeedbackOptions>
      </SectionTitle>
      {total !== 0 ? (
        <SectionTitle title="Statistics">
          <StatisticItems
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={countPositiveFeedbackPercentage}
          ></StatisticItems>
        </SectionTitle>
      ) : (
        <NotificationMsg></NotificationMsg>
      )}
    </div>
  );
}
