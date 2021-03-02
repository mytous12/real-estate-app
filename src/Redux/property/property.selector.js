// Lib imports
import { createSelector } from '@reduxjs/toolkit';

export const selectPropertySlice = (state) => state.propertySlice;

export const selectPropertyForm = createSelector(
  [selectPropertySlice],
  (propertySlice) => propertySlice.propertyForm,
);
