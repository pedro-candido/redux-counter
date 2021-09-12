import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contador from "./reducers/contador.reducer";
import modal from "./reducers/modal.reducer";

const reducer = combineReducers({ contador: contador, modal: modal });
const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof reducer>;
