import PropTypes from 'prop-types';
import { List, Button } from './FeedbackBtn.styled';

function FeedbackBtn({ options, addFeedback }) {
  return (
    <List>
      {Object.keys(options).map(key => {
        return (
          <li key={key}>
            <Button type="button" id={key} onClick={addFeedback}>
              {options[key]}
            </Button>
          </li>
        );
      })}
    </List>
  );
}

FeedbackBtn.propTypes = {
  options: PropTypes.object.isRequired,
  addFeedback: PropTypes.func.isRequired,
};

export { FeedbackBtn };
