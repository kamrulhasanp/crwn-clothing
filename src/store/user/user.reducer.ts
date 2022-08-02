import { AnyAction } from 'redux';

import {USER_ACTION_TYPES} from './user.types';

import { 
    signInFaild, 
    signUpFailed, 
    signOutFailed, 
    signOutSuccess, 
    signInSuccess 
} from './user.action';

import { UserData } from '../../utils/firebase/firebase.utils';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

    if(signInSuccess.match(action)){
        return { ...state, currentUser: action.payload};
    }

    if(signOutSuccess.match(action)){
        return { ...state, currentUser: null};
    }

    if(signInFaild.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
        return { ...state, error: action.payload};
    }

    return state;
 };
