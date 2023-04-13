import { configureStore } from "@reduxjs/toolkit";
import moreTicketModalReducer from "../reducers/modal/moreTicketModalSlice";
import updateTicketModalReducer from "../reducers/modal/updateTicketModalSlice";

const rootReducer: any = {
  moreTicketModal: moreTicketModalReducer,
  updateTicketModal: updateTicketModalReducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
