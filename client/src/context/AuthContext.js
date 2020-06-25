import creatDataContext from './CreateDataContext';
import { createContext } from 'react';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export const {Context, Provider} = creatDataContext(
    authReducer,
    {},
    {isSignedIn: false}
)