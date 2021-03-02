/* eslint-disable react/prop-types */

// Lib imports
import { Form, Formik } from 'formik';
import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux imports
import { setToken } from 'Redux/user/user.slice';
import { selectLoginForm } from 'Redux/user/user.selector';

// Util & Constant imports
import { getFieldName } from 'Util/utils';
import { APIHandler } from 'Util/apiHandler';
import { headings, placeholders } from 'Messages/index';
import { getLoginValidationSchema } from 'Util/validationSchemas';
import { navigateToDashboard, navigateToHomepage } from 'Util/navigation';
import {
  apis, httpVerbs, responseCodes, constantValues, labels, inputTypes,
} from 'Constants/index';

// Component Imports
import FormInput from 'Components/form-components/form-input/form-input.component';
import CustomButton from 'Components/form-components/custom-button/custom-button.component';
import AlertDismissible from 'Components/ui-components/alert-dismissible/alert-dismissible.component';

import './login.styles.css';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const loginFailureAlert = useRef(null);
  const loginForm = useSelector(selectLoginForm);

  const loginUser = async (values) => {
    const response = await APIHandler(apis.LOGIN, httpVerbs.POST, values, true);
    if (response.status === responseCodes.OK) {
      const token = response.data;
      dispatch(setToken(token));
      navigateToDashboard(history);
    } else if (response.status === responseCodes.UNAUTHORIZED) {
      const { message } = response.data;
      loginFailureAlert.current.setDisplayMessage(message);
      loginFailureAlert.current.showAlert();
    }
  };

  return (
    <div className="login">
      <div className="signup-btn">
        <CustomButton
          type={inputTypes.BUTTON}
          value={constantValues.SIGN_UP}
          handleClick={() => navigateToHomepage(history)}
        />
      </div>
      <div className="form">
        <h1 className="heading">{headings.LOGIN_FORM}</h1>
        <AlertDismissible
          ref={loginFailureAlert}
          alertVariant={constantValues.ALERT_DANGER}
        />
        <Formik
          enableReinitialize
          initialValues={loginForm}
          validationSchema={getLoginValidationSchema()}
          onSubmit={(values) => {
            loginUser(values);
          }}
        >
          <Form>
            <FormInput
              label={labels.EMAIL}
              name={getFieldName(labels.EMAIL)}
              type={inputTypes.EMAIL}
              placeholder={placeholders.EMAIL}
            />

            <FormInput
              label={labels.PASSWORD}
              name={getFieldName(labels.PASSWORD)}
              type={inputTypes.PASSWORD}
              placeholder={placeholders.PASSWORD}
            />

            <CustomButton type={inputTypes.SUBMIT} value={constantValues.LOGIN} />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default withRouter(Login);
