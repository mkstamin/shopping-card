/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const afterInc = state.items.map((item) => {
                if (item.id === action.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return { ...state, items: afterInc };

        case 'DECREMENT':
            const afterDic = state.items
                .map((item) => {
                    if (item.id === action.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item.quantity !== 0);

            return { ...state, items: afterDic };

        case 'TOTALCOUNT':
            const caltulation = state.items.reduce(
                (accumulator, currentValue) => {
                    const { price, quantity } = currentValue;
                    const totalAmount = price * quantity;

                    accumulator.totalPrice += totalAmount;
                    accumulator.totalQuantity += quantity;

                    return accumulator;
                },
                { totalPrice: 0, totalQuantity: 0 }
            );
            console.log(caltulation);
            const { totalPrice, totalQuantity } = caltulation;

            return { ...state, totalPrice, totalQuantity };

        case 'REMOVEITEM':
            const items = state.items.filter((el) => el.id !== action.id);

            return { ...state, items };

        default:
            return state;
    }
};

export default reducer;
