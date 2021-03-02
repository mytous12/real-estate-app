/* eslint-disable react/prop-types */

// Lib imports
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux imports
import { setUserForm, resetUserForm } from 'Redux/user/user.slice';
import {
  selectGenderOptions, selectInterests, selectTechnologies, selectUserForm,
} from 'Redux/user/user.selector';

// Utils & Constant imports
import { APIHandler } from 'Util/apiHandler';
import { headings, success } from 'Messages';
import { getSignUpValidationSchema } from 'Util/validationSchemas';
import {
  apis, httpVerbs, responseCodes, constantValues,
} from 'Constants';

// Component imports
import SignUpForm from 'Pages/homepage/signup.form';
import { getInterests, getTechnologies } from 'Pages/homepage/homepage.component';
import AlertDismissible from 'Components/ui-components/alert-dismissible/alert-dismissible.component';

import './edit-profile.styles.css';

const EditPage = ({ history }) => {
  const dispatch = useDispatch();
  const editProfileSuccessAlert = useRef(null);
  const userForm = useSelector(selectUserForm);
  const interests = useSelector(selectInterests);
  const technologies = useSelector(selectTechnologies);
  const genderOptions = useSelector(selectGenderOptions);

  const editProfile = async (values) => {
    const response = await APIHandler(apis.EDIT_PROFILE, httpVerbs.PUT, values, true);
    if (response.status === responseCodes.OK) {
      editProfileSuccessAlert.current.showAlert();
    }
  };

  const getProfile = async () => {
    const response = await APIHandler(apis.GET_PROFILE, httpVerbs.GET);
    if (response.status === responseCodes.OK) {
      const profile = response.data;
      dispatch(setUserForm({ userForm: profile }));
    }
  };

  useEffect(() => {
    getProfile();
    getTechnologies(dispatch);
    getInterests(dispatch);
    return () => {
      dispatch(resetUserForm());
    };
  }, [dispatch, history]);

  return (
    <div className="homepage">
      <div className="form">
        <h1 className="heading">{headings.EDIT_PROFILE}</h1>
        <AlertDismissible
          ref={editProfileSuccessAlert}
          message={success.EDIT_PROFILE}
          alertVariant={constantValues.ALERT_SUCCESS}
        />
        <Formik
          enableReinitialize
          initialValues={{ ...userForm }}
          validationSchema={getSignUpValidationSchema(true)}
          onSubmit={(values) => {
            editProfile(values);
          }}
        >
          <SignUpForm
            editProfile
            interests={interests}
            technologies={technologies}
            genderOptions={genderOptions}
          />
        </Formik>
      </div>
    </div>
  );
};
export default withRouter(EditPage);
