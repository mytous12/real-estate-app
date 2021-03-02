/* eslint-disable no-param-reassign */

// Lib imports
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  token: null,
  technologies: null,
  interests: null,
  genderOptions: [{
    label: 'Male',
    value: 'male',
  }, {
    label: 'Female',
    value: 'female',
  }, {
    label: 'Other',
    value: 'other',
  }],
  userForm: {
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    technologies: [],
    interests: [],
    description: '',
  },
  loginForm: {
    email: '',
    password: '',
  },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: INITIAL_STATE,
  reducers: {
    setToken(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
    setTechnologies(state, action) {
      const { technologies } = action.payload;
      state.technologies = technologies;
    },
    setInterests(state, action) {
      const { interests } = action.payload;
      state.interests = interests;
    },
    setUserForm(state, action) {
      const { userForm } = action.payload;
      state.userForm = userForm;
    },
    resetUserForm(state) {
      state.userForm = INITIAL_STATE.userForm;
    },
  },
});

export const {
  setToken, setTechnologies, setInterests, setUserForm, resetUserForm,
} = userSlice.actions;

export default userSlice.reducer;
