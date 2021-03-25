import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useJobDispatch = () => useDispatch<AppDispatch>();
export const useJobSelector: TypedUseSelectorHook<RootState> = useSelector;
