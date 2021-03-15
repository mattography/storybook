import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, backgroundColor, size, label }) => {
  const [copyIsAvailable, setCopyIsAvailable] = useState(true);
  const baseUrl = window.location.href + "#";
  const copyToClipBoard = async copyHeader => {
    try {
      await navigator.clipboard.writeText(copyHeader);
    } catch(err) {
      console.log("Could not copy to clipboard", err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyIsAvailable(true);
    }, 3000);
  }, [copyIsAvailable])
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <div>
    <button
      onClick={() => setCopyIsAvailable(false)}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      // {...props}
    >
    {copyIsAvailable ? (
      <span name="linked" onClick={() => copyToClipBoard(baseUrl)}>
      {label}
      </span>
    ) : (
      <span>Copied to clipboard</span>
    )}
    </button>
    </div>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
