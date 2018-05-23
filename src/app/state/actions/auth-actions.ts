import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure'
}

export class Login implements Action {
    readonly type: string = AuthActionTypes.LOGIN;
    constructor (public payload: any) {}
}

export class LoginSuccess implements Action {
    readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
    constructor (public payload: any) {}
}

export class LoginFailure implements Action {
    readonly type: string = AuthActionTypes.LOGIN_FAILURE;
    constructor (public payload: any) {}
}

export type All = | Login | LoginSuccess | LoginFailure;