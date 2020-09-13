// import { toast } from "react-toastify";
// import Undo from "../Components/Toast/Toast";

export const initialState = {
  basket: [],
  toRemove: [],
  queCount: 0,
  user: null,
};

export const getBasketPriceTotal = (basket, toRemove) =>
  basket
    ?.filter((v) => !toRemove.includes(v.id))
    .reduce((amount, item) => item.price + amount, 0);
export const getBasketTotal = (basket, toRemove) =>
  basket?.filter((v) => !toRemove.includes(v.id)).length;

const reducer = (state, action) => {
  console.log(state, action);
  let queCount = 0;
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "QUEUE_FOR_REMOVAL":
      return {
        ...state,
        toRemove: [...state.toRemove, action.id],
        queCount: state.queCount + 1,
      };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //   toast(
      //     <Undo onUndo={() => dispatch({ id: action.item.id, type: "UNDO" })} />,
      //     {
      //       // hook will be called whent the component unmount
      //       onClose: () =>
      //         dispatch({ type: "REMOVE_FROM_BASKET", id: action.id }),
      //     }
      //   );
      //   const index = state.basket.findIndex(
      //     (basketItem) => basketItem.id === action.id
      //   );
      //   let newBasket = [...state.basket];

      //   if (index >= 0) {
      //     newBasket.splice(index, 1);
      //   } else {
      //     console.warn(
      //       `Cant remove product (id: ${action.id}) as its not in basket!`
      //     );
      //   }

      if (state.queCount == 0) {
        console.log(
          "[REMOVE_FROM_BASKET] Start Delete from Que",
          state.toRemove
        );
        return {
          ...state,
          basket: state.basket.filter((v) => !state.toRemove.includes(v.id)),
          toRemove: [],
        };
      } else {
        console.log(
          "[REMOVE_FROM_BASKET] Pedding with que count : ",
          state.queCount
        );
        return {
          ...state,
          queCount: state.queCount - 1,
        };
      }

    case "UNDO":
      return {
        ...state,
        // basket: state.basket,
        toRemove: state.toRemove.filter((v) => v !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
