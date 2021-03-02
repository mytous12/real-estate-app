/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */

// Component imports
import CheckBoxInput from '../checkbox-input/checkbox-input.component';

import './checkbox-group.styles.css';

const CheckBoxGroup = ({
  label, name, options,
}) => (
  <div className="checkbox-group">
    <label className="label">{label}</label>
    {
      options.map(({ value, id }) => (
        <CheckBoxInput
          id={id}
          key={id}
          name={name}
          value={value}
        >
          {value}
        </CheckBoxInput>
      ))
    }
  </div>
);

export default CheckBoxGroup;
