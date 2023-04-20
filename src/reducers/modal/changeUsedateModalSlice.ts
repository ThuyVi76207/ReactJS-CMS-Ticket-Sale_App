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

export const ChangeUsedateModalSlice = createSlice({
  name: "Modal",
  initialState,
  reducers: {
    addSuccessChangeModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "success" };
    },
    addErrorChangeModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "error" };
    },
    addWarningChangeModal: (state, action) => {
      const { title, rightButtonText, data } = action.payload;
      return { title, rightButtonText, data, type: "warning" };
    },
    removeChangeModal: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addSuccessChangeModal,
  addErrorChangeModal,
  addWarningChangeModal,
  removeChangeModal,
} = ChangeUsedateModalSlice.actions;

export const selectModal = (state: RootState) => state.moreTicketModal;

export default ChangeUsedateModalSlice.reducer;
