import { useState } from 'react';
// import React, { Component } from 'react';
import { Section } from 'components/Section';
import { FeedbackBtn } from 'components/FeedbackBtn';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addFeedback(evt) {
    const { id } = evt.target;

    switch (id) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const total = good + bad + neutral;
  const positiveFeedbackPercentage = Math.round((good * 100) / total);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackBtn
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          addFeedback={addFeedback}
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
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}

//--------------------------class-------------------------
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = evt => {
//     const { id } = evt.target;
//     this.setState(prevState => {
//       return { [id]: prevState[id] + 1 };
//     });
//   };

//   totalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + bad + neutral;
//   }

//   positiveFeedbackPercentage() {
//     const total = this.totalFeedback();
//     return Math.round((this.state.good * 100) / total);
//   }
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.totalFeedback();
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackBtn
//             options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
//             addFeedback={this.addFeedback}
//           ></FeedbackBtn>
//         </Section>

//         <Section title="Statistics">
//           {!total ? (
//             <Notification />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.totalFeedback()}
//               positivePercentage={this.positiveFeedbackPercentage()}
//             ></Statistics>
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
export { App };
