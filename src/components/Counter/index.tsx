import { useSelector } from "react-redux";
import { selectIsClosed, selectTotal } from "../../store/reducers/Selectors";
import { CounterContainer, CounterStyle } from "./style";

export const Counter = () => {
  const isClosed = useSelector(selectIsClosed);
  const total = useSelector(selectTotal);

  return (
    <CounterContainer>
      <CounterStyle isClosed={isClosed}>{total}</CounterStyle>
    </CounterContainer>
  );
};
