import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundAction = {};

        for (let key in actions) {
            boundAction[key] = actions[key][dispatch];
        }

        return (<context.Provider value={{state, ...boundAction}}>
            {children}
        </context.Provider>)
    };

    return ({Context, Provider})
}