/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// Component imports
import RadioInput from '../radio-input/radio-input.component';

// Style imports
import './radio-group.styles.css';

function RadioGroup({
  items, label, type, name,
}) {
  return (
    <div>
      <label htmlFor={name} className="radio-group-label">
        {label}
      </label>
      {items.map((item) => (
        <RadioInput
          item={item}
          name={name}
          type={type}
          key={item.id}
          label={item.type}
          value={item.type}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
