import { UIState } from '../state/ui.state';
import { AuthenticationState } from './authentication-state';
import * as auth from './reducers/auth-reducer';
import * as ui from './reducers/ui.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthState from './authentication-state';
import * as fromUIState from '../state/ui.state';

export interface AppState {
    ui: UIState;
    auth: AuthenticationState;
}

export const reducers = {
    ui: ui.uiStateReducer,
    auth: auth.reducer
};

// -- top level state selectors --
export const selectAuthState = createFeatureSelector<AuthenticationState>('auth');
export const selectUIState = createFeatureSelector<UIState>('ui');

// -- auth selectors --
export const selectAuthenticated = createSelector (
    selectAuthState,
    fromAuthState.isAuthenticated
);

export const selectAuthError = createSelector (
    selectAuthState,
    fromAuthState.getErrorMessage
);

// -- ui selectors --
export const selectThemeState = createSelector (
    selectUIState,
    fromUIState.getThemeState
);

export const selectThemeNameState = createSelector (
    selectThemeState,
    fromUIState.getThemeNameState
);

export const selectThemeCanCloseState = createSelector (
    selectThemeState,
    fromUIState.getCloseState
);

