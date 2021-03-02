import * as Yup from 'yup';

// Util & Constant imports
import { errors } from 'Messages/index';
import { constantValues, labels } from 'Constants/index';
import { getFieldName, passwordRegex, multipleEmailRegex } from './utils';

const passwordObject = Yup.object({
  password: Yup.string()
    .matches(passwordRegex, errors.STRONG_PASSWORD)
    .required(errors.PASSWORD_REQUIRED),
});

const profileObject = Yup.object({
  name: Yup.string()
    .min(2, errors.NAME_MIN_LENGTH)
    .max(30, errors.NAME_MAX_LENGTH)
    .required(errors.NAME_REQUIRED),
  email: Yup.string()
    .email(errors.INVALID_EMAIL)
    .required(errors.EMAIL_REQUIRED),
  dateOfBirth: Yup.date()
    .required(errors.DATE_REQUIRED)
    .test(getFieldName(labels.DATE_OF_BIRTH), errors.MIN_AGE, (dob) => {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 18);
      return dob <= currentDate;
    }),
  gender: Yup.string()
    .oneOf([constantValues.MALE, constantValues.FEMALE,
      constantValues.OTHER], errors.GENDER_REQUIRED)
    .required(errors.GENDER_REQUIRED),
  technologies: Yup.array()
    .of(Yup.string())
    .min(1, errors.TECHNOLOGY_REQUIRED)
    .ensure(),
  interests: Yup.array()
    .of(Yup.string())
    .min(1, errors.INTEREST_REQUIRED)
    .ensure(),
  description: Yup.string()
    .min(10, errors.DESCRIPTION_MIN_LENGTH)
    .max(100, errors.DESCRIPTION_MAX_LENGTH)
    .required(errors.DESCRIPTION_REQUIRED),
});

export const getSignUpValidationSchema = (profileSchema = false) => (
  profileObject.concat(!profileSchema ? passwordObject : null)
);

export const getCreateEventValidationSchema = () => Yup.object({
  title: Yup.string()
    .trim()
    .min(5, errors.TITLE_MIN_LENGTH)
    .max(50, errors.TITLE_MAX_LENGTH)
    .required(errors.TITLE_REQUIRED),
  description: Yup.string()
    .trim()
    .min(10, errors.DESCRIPTION_MIN_LENGTH)
    .max(100, errors.DESCRIPTION_MAX_LENGTH)
    .required(errors.DESCRIPTION_REQUIRED),
  startDateTime: Yup.date()
    .max(Yup.ref(getFieldName(labels.END_DATE_TIME)), errors.INVALID_START_DATE)
    .required(errors.START_DATE_REQUIRED),
  endDateTime: Yup.date()
    .min(Yup.ref(getFieldName(labels.START_DATE_TIME)), errors.INVALID_END_DATE)
    .required(errors.END_DATE_REQUIRED),
  guests: Yup.string()
    .trim()
    .matches(multipleEmailRegex, errors.INVALID_GUESTS),
});

export const getLoginValidationSchema = () => Yup.object({
  email: Yup.string()
    .email(errors.INVALID_EMAIL)
    .required(errors.EMAIL_REQUIRED),
  password: Yup.string()
    .required(errors.PASSWORD_REQUIRED),
});
