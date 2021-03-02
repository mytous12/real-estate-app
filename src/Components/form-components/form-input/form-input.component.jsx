/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { useField } from 'formik';

import './form-input.styles.css';

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <div className="form-input-group">
      <label className="label" htmlFor={id || name}>{label}</label>
      <input
        className="form-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
