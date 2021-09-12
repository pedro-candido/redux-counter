import store from "../configureStore.store";
import { toggleModal } from "./modal.reducer";

describe("testing toggleModal", () => {
  describe("closing modal", () => {
    it("does return modal isClosed state as true", () => {
      const { isClosed } = store.getState().modal;
      expect(isClosed).toBe(true);
    });
  });

  describe("opening modal", () => {
    store.dispatch(toggleModal());
    it("does dispatch toggleModal", () => {
      store.dispatch(toggleModal());
    });

    it("does return isClosed state as false", () => {
      const { isClosed } = store.getState().modal;
      expect(isClosed).toBe(false);
    });
  });
});
