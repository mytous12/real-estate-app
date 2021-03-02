// Lib imports
import { createSelector } from '@reduxjs/toolkit';

export const selectUserSlice = (state) => state.userSlice;

export const selectToken = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.token,
);

export const selectTechnologies = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.technologies,
);

export const selectInterests = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.interests,
);

export const selectUserForm = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.userForm,
);

export const selectGenderOptions = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.genderOptions,
);

export const selectLoginForm = createSelector(
  [selectUserSlice],
  (userSlice) => userSlice.loginForm,
);
