import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ttlItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.ttlItems = [...state.ttlItems, action.payload];
    },

    removeFromBasket: (state, action) => {
      const index = state.ttlItems.findIndex(
        (el) => el.id === action.payload.id
      );
      let newBasket = [...state.ttlItems];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.payload.id}) as its not in the basket!`
        );
      }
      state.ttlItems = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const basketItemsSelector = (state) => state.basket.ttlItems;

export default basketSlice.reducer;
