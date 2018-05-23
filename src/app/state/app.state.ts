import { UIState } from '../model/ui.model';
import { AuthenticationState } from './authentication-state';
import * as auth from './reducers/auth-reducer';
import * as ui from './ui.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
    ui: UIState;
    authenticationState: AuthenticationState;
}

export const selectAuthState = createFeatureSelector<AuthenticationState>('auth');

export const reducers = {
    ui: ui.uiStateReducer,
    auth: auth.reducer
};
