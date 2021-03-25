import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IFilterTags {
	tags: string[];
}

const initialState: IFilterTags = {
	tags: []
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		apply: (state, action: PayloadAction<string>) => {
			if (state.tags.includes(action.payload)) return;
			state.tags.push(action.payload);
		},
		remove: (state, action: PayloadAction<string>) => {
			state.tags = state.tags.filter((tag) => tag !== action.payload);
		},
		removeAll: (state) => {
			state.tags = [];
		}
	}
});

export const { apply, remove, removeAll } = filterSlice.actions;

export const selectCount = (state: RootState) => state.filters.tags;

export default filterSlice.reducer;
