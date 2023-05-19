import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const {name} = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={this.state}
          />
        </Section>
        <Section title="Statistics">
          { this.countTotalFeedback() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}
        </Section>
      </>
    );
  }
}
