/* eslint-disable react/prop-types */

// Lib imports
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux imports
import { setInterests, setTechnologies } from 'Redux/user/user.slice';
import {
  selectGenderOptions, selectInterests, selectTechnologies, selectUserForm,
} from 'Redux/user/user.selector';

// Utils & constant imports
import errorMessage from 'Messages/errors';
import { APIHandler } from 'Util/apiHandler';
import { navigateToLogin } from 'Util/navigation';
import { headings, success } from 'Messages/index';
import { getSignUpValidationSchema } from 'Util/validationSchemas';
import {
  apis, httpVerbs, responseCodes, constantValues,
} from 'Constants/index';

// Component imports
import SignUpForm from 'Pages/homepage/signup.form';
import AlertLink from 'Components/ui-components/alert-link/alert-link.component';
import CustomButton from 'Components/form-components/custom-button/custom-button.component';
import AlertDismissible from 'Components/ui-components/alert-dismissible/alert-dismissible.component';

import './homepage.styles.css';

export const getTechnologies = async (dispatch) => {
  const response = await APIHandler(apis.GET_TECHNOLOGIES, httpVerbs.GET);

  if (response.status === responseCodes.OK) {
    const result = response.data;
    dispatch(setTechnologies({ technologies: result }));
  }
};

export const getInterests = async (dispatch) => {
  const response = await APIHandler(apis.GET_INTERESTS, httpVerbs.GET);

  if (response.status === responseCodes.OK) {
    const result = response.data;
    dispatch(setInterests({ interests: result }));
  }
};

const Homepage = ({ history }) => {
  const dispatch = useDispatch();
  const errorAlert = useRef(null);
  const successAlert = useRef(null);
  const userForm = useSelector(selectUserForm);
  const interests = useSelector(selectInterests);
  const technologies = useSelector(selectTechnologies);
  const genderOptions = useSelector(selectGenderOptions);

  const signUp = async (values, resetForm) => {
    const response = await APIHandler(apis.SIGNUP, httpVerbs.POST, values, true);

    if (response.status === responseCodes.OK) {
      successAlert.current.showAlert();
      resetForm(userForm);
    } else {
      errorAlert.current.showAlert();
    }
  };

  useEffect(() => {
    getTechnologies(dispatch);
    getInterests(dispatch);
  }, [dispatch]);

  return (
    <div className="homepage">
      <div className="login-btn">
        <CustomButton type="button" value={constantValues.LOGIN} handleClick={() => navigateToLogin(history)} />
      </div>
      <div className="form">
        <h1 className="heading">{headings.SIGNUP_FORM}</h1>
        <AlertLink
          ref={successAlert}
          message={success.SIGNUP}
          alertVariant={constantValues.ALERT_SUCCESS}
          linkMessage={success.LOGIN_LINK}
          link={constantValues.LOGIN}
        />

        <AlertDismissible
          ref={errorAlert}
          message={errorMessage.SIGNUP}
          alertVariant={constantValues.ALERT_DANGER}
        />
        <Formik
          enableReinitialize
          initialValues={{ ...userForm }}
          validationSchema={getSignUpValidationSchema()}
          onSubmit={(values, { resetForm }) => {
            signUp(values, resetForm);
          }}
        >
          <SignUpForm
            interests={interests}
            technologies={technologies}
            genderOptions={genderOptions}
          />
        </Formik>
      </div>
    </div>
  );
};
export default withRouter(Homepage);
