import styled, { css } from 'styled-components';
import {
  BLUE,
  BORDER_NORMAL,
  GRAY_3,
  TRANSITION,
} from '../../../constants/variables';
export const ValueSuggestion = styled.span`
  color: transparent;
`;
export const Suggestion = styled.div`
  width: 100%;
  position: absolute;
  height: 46px;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  padding: 8px 18px 12px 18px;
  line-height: 1.15;
  margin: 0;
  color: ${GRAY_3};
  ${(p) =>
    p.big &&
    css`
      height: 60px;
      font-size: 36px;
      font-weight: 700;
    `}
`;
export const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  height: 46px;
  border: 2px solid #efefef;
  border-radius: ${BORDER_NORMAL};
  outline: none;
  transition: ${TRANSITION};
  padding: 12px 100px 12px 18px;
  position: relative;
  background-color: transparent;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:focus {
    box-shadow: 0 0 2px 1px ${BLUE};
    outline: 0;
  }

  &::placeholder {
    color: ${GRAY_3};
  }

  ${(p) =>
    p.big &&
    css`
      height: 60px;
      font-size: 36px;
      font-weight: 700;
    `}
`;
