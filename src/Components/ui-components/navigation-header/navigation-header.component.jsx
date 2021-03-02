/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// Lib imports
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Redux imports
import { setToken } from 'Redux/user/user.slice';

// Util & constant imports
import { apis, constantValues, inputTypes } from 'Constants/index';
import {
  navigateToAddProperty, navigateToDashboard, navigateToLogin, navigateToProfile,
} from 'Util/navigation';

// Component imports
import CustomButton from 'Components/form-components/custom-button/custom-button.component';

import './navigation-header.styles.css';

const NavigationHeader = ({ history }) => {
  const dispatch = useDispatch();

  const logout = async () => {
    const response = await fetch(apis.LOG_OUT);
    if (response.ok) {
      dispatch(setToken({ token: null }));
      navigateToLogin(history);
    }
  };

  return (
    <div className="navigation-header">
      <div className="dashboard margin-left">
        <CustomButton
          type={inputTypes.BUTTON}
          value={constantValues.DASHBOARD}
          handleClick={() => navigateToDashboard(history)}
        />
      </div>

      <div className="profile margin-left">
        <CustomButton
          type={inputTypes.BUTTON}
          value={constantValues.PROFILE}
          handleClick={() => navigateToProfile(history)}
        />
      </div>
      <div className="create-event-btn margin-left">
        <CustomButton
          type={inputTypes.BUTTON}
          value={constantValues.ADD_PROPERTY}
          handleClick={() => navigateToAddProperty(history)}
        />
      </div>
      <div className="logout-btn margin-left-auto margin-right">
        <CustomButton
          type={inputTypes.BUTTON}
          value={constantValues.LOGOUT}
          handleClick={() => logout()}
        />
      </div>
    </div>

  );
};
export default withRouter(NavigationHeader);
