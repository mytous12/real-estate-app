/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { useField } from 'formik';

import './select-input.styles.css';

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <div className="select-input-group">
      <label className="label" htmlFor={id || name}>{label}</label>
      <select className="select-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SelectInput;
