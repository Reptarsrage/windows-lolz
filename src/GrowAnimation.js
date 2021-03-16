import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import './GrowAnimation.css';

export default function GrowAnimation({ children, in: inProp, ...passThroughProps }) {
  return (
    <CSSTransition in={inProp} classNames="GrowAnimation" {...passThroughProps}>
      {children}
    </CSSTransition>
  );
}

GrowAnimation.defaultProps = {
  in: false,
};

GrowAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
};
