import { combineReducers } from "redux";

import commentReducer from "./commentReducer";

const rootReducer = combineReducers({ comment: commentReducer });

export default rootReducer;
