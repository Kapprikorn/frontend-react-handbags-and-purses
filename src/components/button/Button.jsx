import React from 'react';
import PropTypes from 'prop-types'

Button.propTypes = {
  buttonText: PropTypes.string,
  isDisabled: PropTypes.bool,
}

function Button({buttonText, isDisabled}) {
  return (
    <button onClick={() => console.log(buttonText)}
            disabled={isDisabled}
    >
      {buttonText}
    </button>
  )
}

export default Button;