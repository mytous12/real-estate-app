/* eslint-disable import/no-extraneous-dependencies */

// Lib imports
import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

// Redux imports
import rootReducer from './root.reducer';

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: [],
});

const persistor = persistStore(reduxStore);

export default { reduxStore, persistor };
