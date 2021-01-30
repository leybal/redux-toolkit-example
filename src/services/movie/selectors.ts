import {State} from './reducer';

export const moviesDataSelector = <T extends {movies: State}>(state: T) => state.movies;
