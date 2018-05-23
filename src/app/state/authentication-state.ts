import { User } from '../model/user.model';
import { AppState } from './app.state';

export class AuthenticationState {
    user: User;
    authenticated: boolean;
    errorMessage: string;
}

export const getErrorState = (state: AppState): string => state.authenticationState.errorMessage;

export const initialState: AuthenticationState = {
    user: null,
    authenticated: false,
    errorMessage: ''
};
