export const initialState = {
    basket: [],
    // user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        //logic for adding item to the basket
        return {
          ...state,
          // ...state refers to current basketItems and future basketItems items like users
          basket: [...state.basket, action.item],
          //now basket has new value all the states and action.item refers to that how many products we are getting from productDetails as console.log of (basket) from onClick Dispatch Action.type=> ADD to Basket

        };
      
      case 'EMPTY_BASKET':
        //for empty basket
        return {
          ...state,
          basket: []
        }
  
      case "REMOVE_FROM_BASKET":
        //logic for remove from basket
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          //actually not needed but for red console log debugging
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
      // Below is for users
      // case "SET_USER":
      //   return {
      //     ...state,
      //     user: action.user
      //   }
  
      default:
        return state;
    }
  };
  
  export default reducer;