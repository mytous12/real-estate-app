/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { useField } from 'formik';

import './checkbox-input.styles.css';

const CheckBoxInput = ({ children, ...props }) => {
  const [field, meta] = useField({ type: 'checkbox', ...props });
  const { name, id } = props;
  return (
    <div className="checkbox-input">
      <label className="label" htmlFor={id || name}>
        <input className="checkbox" type="checkbox" {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CheckBoxInput;
