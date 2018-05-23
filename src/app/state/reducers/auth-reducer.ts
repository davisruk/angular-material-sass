import { All, AuthActionTypes } from '../actions/auth-actions';
import { initialState, AuthenticationState } from '../authentication-state';
import { User } from '../../model/user.model';

export function reducer (state = initialState, action: All): AuthenticationState {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            const user: User = new User();
            user.token = action.payload.token;
            user.email = action.payload.email;
            return {...state, user, authenticated: true, errorMessage: null};
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {...state, errorMessage: 'Incorrect email and / or password'};
        }
        default: {
            return state;
        }
    }
}