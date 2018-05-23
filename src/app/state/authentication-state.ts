import { User } from '../model/user.model';

export class AuthenticationState {
    user: User;
    authenticated: boolean;
    errorMessage: string;
}

export const initialState: AuthenticationState = {
    user: null,
    authenticated: false,
    errorMessage: ''
};
