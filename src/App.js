/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

// Lib imports
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux imports
import { selectToken } from 'Redux/user/user.selector';

// Constant imports
import { paths } from 'Constants/index';

// Component imports
import Login from 'Pages/login/login.component';
import Homepage from 'Pages/homepage/homepage.component';
import Dashboard from 'Pages/dashboard/dashboard.component';
import EditProfile from 'Pages/edit-profile/edit-profile.component';
import AddProperty from 'Pages/add-property/add-property.component';
import NavigationHeader from 'Components/ui-components/navigation-header/navigation-header.component';

// Style imports
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const token = useSelector(selectToken);

  return (
    <div className="App">
      {token ? <NavigationHeader /> : null}
      <Switch>
        <Route
          exact
          path={paths.HOMEPAGE}
          render={() => (token ? <Redirect to={paths.DASHBOARD} /> : <Homepage />)}
        />
        <Route
          exact
          path={paths.LOGIN}
          render={() => (token ? <Redirect to={paths.DASHBOARD} /> : <Login />)}
        />
        <Route
          exact
          path={paths.PROFILE}
          render={() => (!token ? <Redirect to={paths.LOGIN} /> : <EditProfile />)}
        />
        <Route
          exact
          path={paths.DASHBOARD}
          render={() => (!token ? <Redirect to={paths.LOGIN} /> : <Dashboard />)}
        />
        <Route
          exact
          path={paths.ADD_PROPERTY}
          component={AddProperty}
          // render={() => (!token ? <Redirect to={paths.LOGIN} /> : <AddProperty />)}
        />
      </Switch>
    </div>
  );
}

export default App;
