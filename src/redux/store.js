import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import contactsReducer from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';

// Configurare persistenta pentru `auth`
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], 
};

// Configurare store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
      },
    }),
  devTools: process.env.NODE_ENV === 'development', 
});

// Creare persistor
export const persistor = persistStore(store);
