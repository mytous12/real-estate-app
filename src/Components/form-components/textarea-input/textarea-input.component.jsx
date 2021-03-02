/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { useField } from 'formik';

import './textarea-input.styles.css';

const TextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <div className="textarea-input">
      <label className="label" htmlFor={id || name}>{label}</label>
      <textarea className="textarea" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextAreaInput;
