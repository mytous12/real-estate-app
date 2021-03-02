/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/label-has-associated-control */

// Lib imports
import { useField } from 'formik';

function FileInput({ name, type }) {
  const [field, meta, helpers] = useField({ name, type });
  return (
    <div className="form-input-group">
      <label className="label" htmlFor={field.name}>File upload</label>
      <input
        multiple
        id={field.name}
        name={field.name}
        type={type}
        onBlur={() => helpers.setTouched(true)}
        onChange={(event) => {
          helpers.setValue(event.currentTarget.files);
        }}
        className="form-control"
      />
      {meta.errors && meta.touched ? <div className="error">{meta.errors}</div> : null}
    </div>
  );
}

export default FileInput;
