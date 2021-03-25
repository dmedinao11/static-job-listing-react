import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import jobsReducer from "../features/jobsList/jobsListReducer";

export const store = configureStore({
	reducer: {
		filters: filterReducer,
		jobs: jobsReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
