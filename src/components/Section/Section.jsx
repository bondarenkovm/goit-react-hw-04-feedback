import PropTypes from 'prop-types';
import { Sections, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Section };
