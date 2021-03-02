// Lib imports
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

// Redux Imports
import userSlice from './user/user.slice';
import propertySlice from './property/property.slice';

const reducers = combineReducers({
  userSlice,
  propertySlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userSlice'],
};

export default persistReducer({ ...persistConfig }, reducers);
