import React from 'react';
import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';
export const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
