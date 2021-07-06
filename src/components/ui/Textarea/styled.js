import styled, { css } from 'styled-components';
import {
  BLUE,
  BORDER_NORMAL,
  GRAY_3,
  TRANSITION,
} from '../../../constants/variables';

export const StyledTextarea = styled.textarea`
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
export const Title = styled.span`
  font-size: 24px;
  line-height: 29px;
  color: $GRAY;
  margin-bottom: 12px;
  display: inline-block;
`;
export const Label = styled.label`
  display: flex;
  position: relative;
`;
