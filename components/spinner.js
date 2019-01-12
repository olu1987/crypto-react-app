import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ height, width, color, topBottomMargin }) => {
  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
      <style jsx>
        {`
          .spinner-border {
            height: ${height};
            width: ${width};
            border-color: ${color};
            display: block;
            margin: ${topBottomMargin} auto;
          }
        `}
      </style>
    </div>
  );
};

Spinner.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  topBottomMargin: PropTypes.string,
};

Spinner.defaultProps = {
  height: '',
  width: '',
  color: '',
  topBottomMargin: '',
};

export default Spinner;