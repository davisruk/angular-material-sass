import { UIState } from '../model/ui.model';
import { AuthenticationState } from './authentication-state';
import * as auth from './reducers/auth-reducer';
import * as ui from './ui.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthState from './authentication-state';

export interface AppState {
    ui: UIState;
    auth: AuthenticationState;
}

export const selectAuthState = createFeatureSelector<AuthenticationState>('auth');
export const selectUIState = createFeatureSelector<UIState>('ui');

export const selectAuthenticated = createSelector (
    selectAuthState,
    fromAuthState.isAuthenticated
);

export const selectAuthError = createSelector (
    selectAuthState,
    fromAuthState.getErrorMessage
);

export const reducers = {
    ui: ui.uiStateReducer,
    auth: auth.reducer
};
