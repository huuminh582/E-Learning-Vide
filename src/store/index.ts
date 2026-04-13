import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMw = getDefaultMiddleware({
      serializableCheck: false,
    });
    
    if (process.env.NODE_ENV === 'development') {
      return defaultMw.concat(logger);
    }
    return defaultMw;
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
