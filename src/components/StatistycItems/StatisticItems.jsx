import React from 'react';
import { Item, Box } from './StatisticItems.styled';
import PropTypes from 'prop-types';

export const StatisticItems = ({ state, total, feedback }) => {
  return (
    <Box>
      <Item>
        good:<span>{state.good}</span>
      </Item>
      <Item>
        neutral:<span>{state.neutral}</span>
      </Item>
      <Item>
        bad:<span>{state.bad}</span>
      </Item>
      <Item>
        Total:<span>{total()}</span>
      </Item>
      <Item>
        Positive feedback:
        <span>{feedback()}%</span>
      </Item>
    </Box>
  );
};
StatisticItems.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
