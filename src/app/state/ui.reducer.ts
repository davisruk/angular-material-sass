import { Action } from '@ngrx/store';
import { UIState } from '../model/ui.model';
import { ThemeState } from '../model/theme.state';
import { ActionWithPayload } from '../core/core.action';
import { AppState } from './app.state';

export const TOGGLE_DARK = 'UI_THEME_TOGGLE_DARK';
export const SET_THEME = 'UI_THEME_SET_THEME';
const initialState: UIState = {themeState: {isDark: false, canClose: false, themeName: null}};

export function uiStateReducer (state: UIState = initialState, action: Action) {
    switch (action.type) {
        case TOGGLE_DARK:
            const toggleAction: ActionWithPayload<ThemeState> = <ActionWithPayload<ThemeState>>action;
            return {themeState: Object.assign({}, toggleAction.payload)};

        case SET_THEME:
        const setThemeAction: ActionWithPayload<ThemeState> = <ActionWithPayload<ThemeState>>action;
        return {themeState: Object.assign({}, setThemeAction.payload)};

        default:
            return state;
    }
}
