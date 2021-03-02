/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */

// Lib imports
import { useField } from 'formik';

// Style imports
import './radio-input.styles.css';

function RadioInput({ label, item, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={item.type}>
        <input
          {...field}
          {...props}
          key={item.id}
          value={item.type}
          className="radio-input"
        />
        {item.type}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default RadioInput;
