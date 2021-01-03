

export const initialState = {
    basket:[],
    user:null
};

// Selector

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const Reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
     case 'ADD_TO_BASKET':
        //Logic for adding item to basket 
        return { 
            ...state,
            basket: [...state.basket, action.item],
        };
       
     case 'REMOVE_FROM_BASKET':
        //  Logic for removing item from basket
        return { state };
    default:
        return state;
    }
}

export default Reducer;