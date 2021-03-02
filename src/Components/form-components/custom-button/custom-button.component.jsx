/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import './custom-button.styles.css';

const CustomButton = ({
  type, value, handleClick,
}) => (
  <div className="custom-button">
    <button
      className="button-element"
      type={type}
      onClick={handleClick}
    >
      {value}
    </button>
  </div>
);

export default CustomButton;
