/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */

// Lib imports
import DateTimePicker from 'react-datetime-picker';
import { useField, useFormikContext } from 'formik';

const DateTimePickerField = ({ label, ...props }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props);
  const { id, name } = props;
  return (
    <div className="form-input-group">
      <label className="label" htmlFor={id || name}>{label}</label>
      <DateTimePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        onBlur={() => setFieldTouched(name, true)}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DateTimePickerField;
