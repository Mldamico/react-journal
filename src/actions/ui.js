import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const setError = (error) => ({
  type: types.uiSetError,
  payload: error,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});
