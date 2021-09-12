import styled from "styled-components";
import { ICounterStyle } from "./types";

export const CounterContainer = styled.div`
  font-size: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const CounterStyle = styled.h1`
  opacity: ${({ isClosed }: ICounterStyle) => (isClosed === true ? 0 : 1)};
`;
