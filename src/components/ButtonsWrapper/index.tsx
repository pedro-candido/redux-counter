import { useSelector, useDispatch } from "react-redux";

import { ButtonContainer } from "./style";
import { Button } from "../Button";

import {
  increment,
  decrement,
  resetTotalCount,
} from "../../store/reducers/contador.reducer";
import { toggleModal } from "../../store/reducers/modal.reducer";
import { RootState } from "../../store/configureStore.store";

export const ButtonsWrapper = () => {
  const state = useSelector((state): RootState => state);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const handleToggleModal = () => {
    dispatch(resetTotalCount());
    dispatch(toggleModal());
  };

  return (
    <ButtonContainer>
      <Button onClick={() => handleIncrement()}>Add count</Button>
      <Button onClick={() => handleDecrement()}>Remove count</Button>
      <Button onClick={() => handleToggleModal()}>
        {`${state.modal.isClosed === true ? "Open" : "Close"}`}
      </Button>
    </ButtonContainer>
  );
};
