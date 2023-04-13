import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
type initialStateType = {
  title: String;
  rightButtonText: String;
  data: object;
};

const initialState: initialStateType = {
  title: "",
  rightButtonText: "",
  data: {},
};

export const UpdateTicketModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    addSuccessUpdateModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "success" };
    },
    addErrorUpdateModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "error" };
    },
    addWarningUpdateModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "warning" };
    },
    removeUpdateModal: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addSuccessUpdateModal,
  addErrorUpdateModal,
  addWarningUpdateModal,
  removeUpdateModal,
} = UpdateTicketModalSlice.actions;

export const selectModal = (state: RootState) => state.moreTicketModal;

export default UpdateTicketModalSlice.reducer;
