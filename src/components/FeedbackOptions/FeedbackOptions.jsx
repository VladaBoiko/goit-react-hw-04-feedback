import React from 'react';
import { Box, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={chooseMethod(option, onLeaveFeedback)}
            key={option}
          >
            {option}
          </Button>
        );
      })}{' '}
    </Box>
  );
};
function chooseMethod(option, onLeaveFeedback) {
  if (option === 'good') {
    return onLeaveFeedback[0];
  }
  if (option === 'neutral') {
    return onLeaveFeedback[1];
  }
  if (option === 'bad') {
    return onLeaveFeedback[2];
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
