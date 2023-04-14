import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
type initialStateType = {
  title: String;
  rightButtonText: String;
};

const initialState: initialStateType = {
  title: "",
  rightButtonText: "",
};

export const MoreTicketModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    addSuccessModal: (state, action) => {
      const { title, rightButtonText } = action.payload;
      return { title, rightButtonText, type: "success" };
    },
    addErrorModal: (state, action) => {
      const { title, rightButtonText } = action.payload;
      return { title, rightButtonText, type: "error" };
    },
    addWarningModal: (state, action) => {
      const { title, rightButtonText } = action.payload;
      return { title, rightButtonText, type: "warning" };
    },
    removeModal: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSuccessModal, addErrorModal, addWarningModal, removeModal } =
  MoreTicketModalSlice.actions;

export const selectModal = (state: RootState) => state.moreTicketModal;

export default MoreTicketModalSlice.reducer;
