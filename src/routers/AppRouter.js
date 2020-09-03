import React from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';
export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        const notes = await loadNotes(user.uid);
        dispatch(setNotes(notes));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Please wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path='/auth'
            component={AuthRouter}
          />

          <PrivateRoute
            isAuthenticated={isLoggedIn}
            exact
            path='/'
            component={JournalScreen}
          />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  );
};
