import { AnyAction, combineReducers } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers";

export type TDispatch = ThunkDispatch<RootState, void, AnyAction>

