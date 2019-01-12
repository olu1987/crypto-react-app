import React from 'react';
import PropTypes from 'prop-types';

const ErrorOverlay = ({ text }) => {
  return (
    <div className="error-overlay">
      <h1>{text}</h1>

      <style jsx>
        {`
          .error-overlay {
            height: 100%;
            width: 100%;
            border: 1px solid #727272;
            padding: 15px;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
};

ErrorOverlay.propTypes = {
  text: PropTypes.string,
};

ErrorOverlay.defaultProps = {
  text: '',
};

export default ErrorOverlay;
