import store from "../configureStore.store";
import { decrement, increment, resetTotalCount } from "./contador.reducer";

describe("test actions", () => {
  it("does return initialState equals to 0", () => {
    const { total } = store.getState().contador;

    expect(total).toBe(0);
  });
  it("does decrement one to state.value and return -1", () => {
    store.dispatch(decrement());
    const { total } = store.getState().contador;
    expect(total).toBe(-1);
    store.dispatch(resetTotalCount());
  });
  it("does increment one to state.value and return 1", () => {
    store.dispatch(increment());
    const { total } = store.getState().contador;
    expect(total).toBe(1);
    store.dispatch(resetTotalCount());
  });
  it("does reset total value", () => {
    store.dispatch(resetTotalCount());
    const { total } = store.getState().contador;
    expect(total).toBe(0);
  });
});
