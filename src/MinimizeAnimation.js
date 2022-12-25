import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

export default function MinimizeAnimation({ children, in: inProp, duration, ...passThroughProps }) {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };
  
  return (
    <Transition in={inProp} timeout={duration} classNames="MinimizeAnimation" {...passThroughProps}>
      {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
    </Transition>
  );
}

MinimizeAnimation.defaultProps = {
  in: false,
  duration: 200,
};

MinimizeAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
  duration: PropTypes.number,
};
