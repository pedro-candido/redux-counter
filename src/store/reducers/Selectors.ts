import { State } from "./types";

export const selectTotal = (state: State) => state.contador.total;

export const selectIsClosed = (state: State) => state.modal.isClosed;
