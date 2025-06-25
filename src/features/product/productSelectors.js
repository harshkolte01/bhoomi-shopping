import { createSelector } from '@reduxjs/toolkit';

const selectProductState = (state) => state.products;

export const selectAllProducts = createSelector(
  [selectProductState],
  (products) => products.items
);

export const selectProductStatus = createSelector(
  [selectProductState],
  (products) => products.status
);

export const selectProductError = createSelector(
  [selectProductState],
  (products) => products.error
); 