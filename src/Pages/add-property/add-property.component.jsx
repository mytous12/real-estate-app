/* eslint-disable react/react-in-jsx-scope */

// Lib imports
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

// Redux imports
import { selectPropertyForm } from 'Redux/property/property.selector';

// Constant imports
import { placeholders } from 'Messages';
import {
  constantValues, fieldNames, inputTypes, labels,
} from 'Constants';

// Component imports
import FileInput from 'Components/form-components/file-input/file-input.component';
import FormInput from 'Components/form-components/form-input/form-input.component';
import RadioGroup from 'Components/form-components/radio-group/radio-group.component';
import SelectInput from 'Components/form-components/select-input/select-input.component';
import CustomButton from 'Components/form-components/custom-button/custom-button.component';
import CheckBoxGroup from 'Components/form-components/checkbox-group/checkbox-group.component';

// Style imports
import './add-property.styles.css';
import Thumb from 'Components/ui-components/thumb/thumb.component';

const ownershipTypes = [
  {
    id: 1,
    type: 'Sell',
  },
  {
    id: 2,
    type: 'Rent',
  },
];

const rentalPropertyTypes = [
  {
    id: 1,
    type: 'Apartment',
  },
  {
    id: 2,
    type: 'Independent House',
  },
  {
    id: 3,
    type: 'Independent Floor',
  },
  {
    id: 4,
    type: 'Villa',
  },
];

const propertyTypesForSelling = [
  ...rentalPropertyTypes,
  {
    id: 5,
    type: 'Plot',
  },
];

const constructionStatuses = [
  {
    id: 1,
    type: 'Ready to Move',
  },
  {
    id: 2,
    type: 'Under Construction',
  },
];

const furnishTypes = [
  {
    id: 1,
    type: 'Fully Furnished',
  },
  {
    id: 2,
    type: 'Semi Furnished',
  },
  {
    id: 3,
    type: 'Unfurnished',
  },
];

const securityDeposit = [
  {
    id: 1,
    type: 'Yes',
  },
  {
    id: 2,
    type: 'No',
  },
];

const preferredTenantTypes = [
  {
    id: 1,
    value: 'Family',
  },
  {
    id: 2,
    value: 'Bachelors',
  },
  {
    id: 3,
    value: 'Company',
  },
];

const possessionStatus = [
  {
    id: 1,
    type: 'Immediate',
  },
  {
    id: 2,
    type: 'In Future',
  },
];

const areaUnits = [
  {
    value: 'sq ft',
    label: 'Sq. Ft.',
  },
  {
    value: 'sq mt',
    label: 'Sq. Mt.',
  },
  {
    value: 'sq yd',
    label: 'Sq. Yd.',
  },
];

const addPropertyFormOrder = [
  constantValues.PROPERTY_DETAILS,
  constantValues.PROPERTY_ADDRESS,
  constantValues.PROPERTY_IMAGES,
];

function AddProperty() {
  const propertyForm = useSelector(selectPropertyForm);
  const [visibleForm, setVisibleForm] = useState(constantValues.PROPERTY_DETAILS);

  const propertyDetailsForm = (values) => (
    <div>
      <RadioGroup
        label={labels.OWNERSHIP_TYPE}
        name={fieldNames.OWNERSHIP_TYPE}
        type={inputTypes.RADIO}
        items={ownershipTypes}
      />
      <RadioGroup
        label={labels.PROPERTY_TYPE}
        name={fieldNames.PROPERTY_TYPE}
        type={inputTypes.RADIO}
        items={values.ownershipType === constantValues.SELL
          ? propertyTypesForSelling : rentalPropertyTypes}
      />

      {values.propertyType === constantValues.PLOT
        ? (
          <div>
            <RadioGroup
              label={labels.POSSESSION_STATUS}
              name={fieldNames.POSSESSION_STATUS}
              type={inputTypes.RADIO}
              items={possessionStatus}
            />

            {values.possessionStatus === constantValues.IMMEDIATE

              ? (
                <FormInput
                  label={labels.PROPERTY_AGE}
                  name={fieldNames.PROPERTY_AGE}
                  placeholder={placeholders.PROPERTY_AGE}
                  type={inputTypes.NUMBER}
                />
              )
              : (
                <FormInput
                  label={labels.POSSESSION_DATE}
                  name={fieldNames.POSSESSION_DATE}
                  type={inputTypes.DATE}
                />
              )}

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.PLOT_PRICE}
              name={fieldNames.PLOT_PRICE}
              label={labels.PLOT_PRICE}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.MAINTENANCE_CHARGES}
              name={fieldNames.MAINTENANCE_CHARGES}
              label={labels.MAINTENANCE_CHARGES}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.PLOT_AREA}
              name={fieldNames.PLOT_AREA}
              label={labels.PLOT_AREA}
            />

            <SelectInput label={labels.AREA_UNIT} name={fieldNames.AREA_UNIT}>
              {areaUnits?.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </SelectInput>

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.LENGTH}
              name={fieldNames.LENGTH}
              label={labels.LENGTH}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.WIDTH}
              name={fieldNames.WIDTH}
              label={labels.WIDTH}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.WIDTH_OF_FACING_ROAD}
              name={fieldNames.WIDTH_OF_FACING_ROAD}
              label={labels.WIDTH_OF_FACING_ROAD}
            />

          </div>
        )
        : (
          <div>
            {values.ownershipType === constantValues.SELL
              ? (
                <RadioGroup
                  label={labels.CONSTRUCTION_STATUS}
                  name={fieldNames.CONSTRUCTION_STATUS}
                  type={inputTypes.RADIO}
                  items={constructionStatuses}
                />
              )
              : (
                <FormInput
                  label={labels.PROPERTY_AGE}
                  name={fieldNames.PROPERTY_AGE}
                  placeholder={placeholders.PROPERTY_AGE}
                  type={inputTypes.NUMBER}
                />
              )}

            {values.constructionStatus === constantValues.READY_TO_MOVE
              ? (
                <FormInput
                  label={labels.PROPERTY_AGE}
                  name={fieldNames.PROPERTY_AGE}
                  placeholder={placeholders.PROPERTY_AGE}
                  type={inputTypes.NUMBER}
                />
              ) : null}

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.BHK}
              name={fieldNames.BHK}
              label={labels.BHK}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.BATHROOM}
              name={fieldNames.BATHROOM}
              label={labels.BATHROOM}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.BALCONY}
              name={fieldNames.BALCONY}
              label={labels.BALCONY}
            />

            <RadioGroup
              label={labels.FURNISH_TYPE}
              name={fieldNames.FURNISH_TYPE}
              type={inputTypes.RADIO}
              items={furnishTypes}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.COVERED_PARKING}
              name={fieldNames.COVERED_PARKING}
              label={labels.COVERED_PARKING}
            />

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.OPEN_PARKING}
              name={fieldNames.OPEN_PARKING}
              label={labels.OPEN_PARKING}
            />

            {values.ownershipType === constantValues.SELL
              ? (
                <FormInput
                  type={inputTypes.NUMBER}
                  placeholder={placeholders.COST}
                  name={fieldNames.COST}
                  label={labels.COST}
                />
              )
              : (
                <FormInput
                  type={inputTypes.NUMBER}
                  placeholder={placeholders.MONTHLY_RENT}
                  name={fieldNames.MONTHLY_RENT}
                  label={labels.MONTHLY_RENT}
                />
              )}

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.MAINTENANCE_CHARGES}
              name={fieldNames.MAINTENANCE_CHARGES}
              label={labels.MAINTENANCE_CHARGES}
            />

            {values.ownershipType === constantValues.RENT
              ? (
                <FormInput
                  type={inputTypes.DATE}
                  name={fieldNames.AVAILABLE_FROM}
                  label={labels.AVAILABLE_FROM}
                />
              )
              : null}

            {values.ownershipType === constantValues.RENT
              ? (
                <RadioGroup
                  label={labels.SECURITY_DEPOSIT}
                  name={fieldNames.SECURITY_DEPOSIT}
                  type={inputTypes.RADIO}
                  items={securityDeposit}
                />
              )
              : null }

            {values.securityDeposit === constantValues.YES ? (
              <FormInput
                type={inputTypes.NUMBER}
                placeholder={placeholders.SECURITY_DEPOSIT_AMOUNT}
                name={fieldNames.SECURITY_DEPOSIT_AMOUNT}
                label={labels.SECURITY_DEPOSIT_AMOUNT}
              />
            )
              : null}

            <FormInput
              type={inputTypes.NUMBER}
              placeholder={placeholders.BUILT_UP_AREA}
              name={fieldNames.BUILT_UP_AREA}
              label={labels.BUILT_UP_AREA}
            />

            {values.ownershipType === constantValues.RENT
              ? (
                <CheckBoxGroup
                  name={fieldNames.PREFERRED_TENANTS}
                  label={labels.PREFERRED_TENANTS}
                  options={preferredTenantTypes}
                />
              ) : null}
          </div>
        )}

    </div>

  );

  const flatAddressDetails = () => (
    <div>
      <FormInput
        type={inputTypes.TEXT}
        label={labels.FLAT_NO}
        placeholder={placeholders.FLAT_NO}
        name={fieldNames.FLAT_NO}
      />

      <FormInput
        type={inputTypes.NUMBER}
        label={labels.FLOOR_NO}
        placeholder={placeholders.FLOOR_NO}
        name={fieldNames.FLOOR_NO}
      />

      <FormInput
        type={inputTypes.NUMBER}
        label={labels.TOTAL_FLOORS}
        placeholder={placeholders.TOTAL_FLOORS}
        name={fieldNames.TOTAL_FLOORS}
      />
    </div>
  );

  const propertyAddressForm = (values) => (
    <div>
      <FormInput
        type={inputTypes.TEXT}
        label={labels.CITY}
        placeholder={placeholders.CITY}
        name={fieldNames.CITY}
      />

      <FormInput
        type={inputTypes.TEXT}
        label={labels.BUILDING}
        placeholder={placeholders.BUILDING}
        name={fieldNames.BUILDING}
      />

      <FormInput
        type={inputTypes.TEXT}
        label={labels.LOCALITY}
        placeholder={placeholders.LOCALITY}
        name={fieldNames.LOCALITY}
      />

      {values.propertyType === constantValues.APARTMENT
        ? flatAddressDetails() : null}

    </div>
  );

  const propertyImagesForm = (values) => (
    <div>
      <FileInput
        type="file"
        name="images"
      />
      {typeof values.images === 'object'
        ? (
          Array.from(values.images).map((image) => (
            <Thumb
              key={image.name}
              file={image}
            />
          ))

        ) : null}
    </div>
  );

  const getForm = (values) => {
    switch (visibleForm) {
      case addPropertyFormOrder[0]:
        return propertyDetailsForm(values);
      case addPropertyFormOrder[1]:
        return propertyAddressForm(values);
      case addPropertyFormOrder[2]:
        return propertyImagesForm(values);
      default:
        return propertyDetailsForm(values);
    }
  };

  return (
    <div className="add-property-container">
      <Formik
        enableReinitialize
        initialValues={{ ...propertyForm }}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ values }) => (
          <Form className="add-property-form">
            {
              getForm(values)
            }
            <CustomButton
              type={inputTypes.BUTTON}
              value={constantValues.CONTINUE}
              handleClick={() => {
                const formIndex = addPropertyFormOrder.indexOf(visibleForm);
                setVisibleForm(addPropertyFormOrder[formIndex + 1]);
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProperty;
