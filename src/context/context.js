import React, { useEffect, useReducer } from 'react';
import data from '../data/data';
import reducer from '../reducer/reducer';

export const CardContext = React.createContext();

const initialValue = {
    items: data,
    totalPrice: 0,
    totalQuantity: 0,
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const incCout = (id) => {
        dispatch({ type: 'INCREMENT', id });
    };

    const dicCout = (id) => {
        dispatch({ type: 'DECREMENT', id });
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVEITEM', id });
    };

    useEffect(() => {
        dispatch({ type: 'TOTALCOUNT' });
    }, [state.items]);

    return (
        <CardContext.Provider value={{ ...state, incCout, dicCout, removeItem }}>
            {children}
        </CardContext.Provider>
    );
};
