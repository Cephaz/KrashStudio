import {createSelector} from '@reduxjs/toolkit';
import {RootState} from './index';

const selectSwapiState = (state: RootState) => state.swapi;

export const selectQuery = createSelector(selectSwapiState, (swapi) => swapi.query);

export const selectCategory = createSelector(selectSwapiState, (swapi) => swapi.category);

export const selectResults = createSelector(selectSwapiState, (swapi) => swapi.results);

export const selectSelectedItem = createSelector(selectSwapiState, (swapi) => swapi.selectedItem);

export const selectStatus = createSelector(selectSwapiState, (swapi) => swapi.status);

export const selectError = createSelector(selectSwapiState, (swapi) => swapi.error);
