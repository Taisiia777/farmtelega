import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBoostState {
   info: {
      name: string;
      imgSrc: string;
      earning: string;
      price: string;
   };
   isOpen: boolean;
}

const initialState: IBoostState = {
   info: {
      name: "",
      imgSrc: "",
      earning: "",
      price: "",
   },
   isOpen: false,
};

export const boostSlice = createSlice({
   name: "growthStages",
   initialState,
   reducers: {
      setBoostInfo: (
         state,
         action: PayloadAction<{
            name: string;
            imgSrc: string;
            earning: string;
            price: string;
         }>
      ) => {
         state.info = action.payload;
         state.isOpen = true;
      },
      closeBoostBuyPopup: (state) => {
         state.isOpen = false;
      },
   },
});

export const { setBoostInfo, closeBoostBuyPopup } = boostSlice.actions;

export default boostSlice.reducer;
