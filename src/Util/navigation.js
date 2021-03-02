// Constant imports
import { paths } from 'Constants/index';

export const navigateToProfile = (history) => {
  history.push(paths.PROFILE);
};

export const navigateToLogin = (history) => {
  history.push(paths.LOGIN);
};

export const navigateToDashboard = (history) => {
  history.push(paths.DASHBOARD);
};

export const navigateToHomepage = (history) => {
  history.push(paths.HOMEPAGE);
};

export const navigateToAddProperty = (history) => {
  history.push(paths.ADD_PROPERTY);
};

export const navigateToEditEvent = (history, eventId) => {
  history.push(paths.EDIT_EVENT.replace(':eventId', eventId));
};
