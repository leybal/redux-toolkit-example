// import {createReducer} from '@reduxjs/toolkit';
// import {getCurrenciesSuccess} from 'src/openapi/apis/CurrencyControllerApi';
// import {Currency} from 'src/openapi/models/Currency';
import {Movie} from './../../models/Movie';


// export const getMoviesSuccess = createAction<PayloadData<Array<Movie>>>('CURRENCY_CONTROLLER__GET_CURRENCIES__SUCCESS');

export type State = Movie[] | null;
const DEFAULT_STATE = null;
// export const currency = createReducer<State>(DEFAULT_STATE, builder => builder
//     .addCase(getMoviesSuccess, (state, action) => {
//         return action.payload.data;
//     }),
// );
