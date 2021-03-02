/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */

// Lib imports
import { Form } from 'formik';

// Utils & constant imports
import { getFieldName } from 'Util/utils';
import { placeholders } from 'Messages/index';
import { constantValues, labels, inputTypes } from 'Constants/index';

// Component imports
import FormInput from 'Components/form-components/form-input/form-input.component';
import SelectInput from 'Components/form-components/select-input/select-input.component';
import CustomButton from 'Components/form-components/custom-button/custom-button.component';
import CheckBoxGroup from 'Components/form-components/checkbox-group/checkbox-group.component';
import TextAreaInput from 'Components/form-components/textarea-input/textarea-input.component';

const SignUpForm = ({
  genderOptions, technologies, interests, editProfile = false,
}) => (
  <Form>
    <FormInput
      label={labels.NAME}
      name={getFieldName(labels.NAME)}
      type={inputTypes.TEXT}
      placeholder={placeholders.NAME}
    />

    <FormInput
      label={labels.EMAIL}
      name={getFieldName(labels.EMAIL)}
      type={inputTypes.EMAIL}
      placeholder={placeholders.EMAIL}
    />

    {!editProfile ? (
      <FormInput
        label={labels.PASSWORD}
        name={getFieldName(labels.PASSWORD)}
        type={inputTypes.PASSWORD}
        placeholder={placeholders.PASSWORD}
      />
    ) : null}

    <FormInput
      label={labels.DATE_OF_BIRTH}
      name={getFieldName(labels.DATE_OF_BIRTH)}
      type={inputTypes.DATE}
    />

    <SelectInput label={labels.GENDER} name={getFieldName(labels.GENDER)}>
      <option value="" disabled hidden>{placeholders.GENDER}</option>
      {genderOptions ? genderOptions.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      )) : null}
    </SelectInput>

    <SelectInput
      multiple
      label={labels.TECHNOLOGIES}
      name={getFieldName(labels.TECHNOLOGIES)}
    >
      {technologies ? technologies.map(({ value, id }) => (
        <option key={id} value={value}>{value}</option>
      )) : null}
    </SelectInput>

    <CheckBoxGroup
      options={interests || []}
      label={labels.INTERESTS}
      name={getFieldName(labels.INTERESTS)}
    />

    <TextAreaInput
      label={labels.DESCRIPTION}
      name={getFieldName(labels.DESCRIPTION)}
      placeholder={placeholders.DESCRIPTION}
    />

    {!editProfile ? (
      <CustomButton
        type={inputTypes.SUBMIT}
        value={constantValues.SIGN_UP}
      />
    ) : (
      <CustomButton
        type={inputTypes.SUBMIT}
        value={constantValues.UPDATE_PROFILE}
      />
    )}
  </Form>
);

export default SignUpForm;
