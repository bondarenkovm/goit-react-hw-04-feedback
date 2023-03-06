import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <List>
      <Item>
        <span>Good:</span>
        <span>{good}</span>
      </Item>
      <Item>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </Item>
      <Item>
        <span>Bad:</span>
        <span>{bad}</span>
      </Item>
      <Item>
        <span>Total:</span>
        <span>{total}</span>
      </Item>
      <Item>
        <span>Positive feedback:</span>
        <span>{!positivePercentage ? 0 : positivePercentage}%</span>
      </Item>
    </List>
  );
}

export { Statistics };

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
