import React, { Component } from 'react';
import { Section } from 'components/Section';
import { FeedbackBtn } from 'components/FeedbackBtn';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    const { id } = evt.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  }

  positiveFeedbackPercentage() {
    const total = this.totalFeedback();
    return Math.round((this.state.good * 100) / total);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
            addFeedback={this.addFeedback}
          ></FeedbackBtn>
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.positiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </Container>
    );
  }
}
export { App };
