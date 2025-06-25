import { createSelector } from '@reduxjs/toolkit';

const selectAuthState = (state) => state.auth;

export const selectIsLoggedIn = createSelector(
  [selectAuthState],
  (auth) => auth.isLoggedIn
);

export const selectUsername = createSelector(
  [selectAuthState],
  (auth) => auth.username
); 