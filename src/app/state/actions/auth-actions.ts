import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGIN_CANCEL = '[Auth] Login Cancel',
}

export class Login implements Action {
    readonly type: string = AuthActionTypes.LOGIN;
    constructor (public payload: any) {}
}

export class LoginCancel implements Action {
    readonly type: string = AuthActionTypes.LOGIN_CANCEL;
    constructor (public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
    constructor (public payload: LoginSuccessPayload) {}
}
export class LoginSuccessPayload {
    token: string;
    email: string;
}

export class LoginFailure implements Action {
    readonly type: string = AuthActionTypes.LOGIN_FAILURE;
    constructor (public payload: any) {}
}

export type All = | Login | LoginSuccess | LoginFailure | LoginCancel;
