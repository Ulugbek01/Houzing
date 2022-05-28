import styled from "styled-components";
import { ReactComponent as home } from "../../../assets/icons/home-icon.svg";

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const Container = styled.input`
  font-family: "Montserrat", sans-serif;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: ${({ pl }) => (pl ? "44px" : "16px")};
  color: #0d263b;
  border: 1px solid #e6e9ec;
  outline: none;
  :focus {
    border: 1px solid #40a9ff;
  }
`;


export const HomeIcon = styled(home)`
  position: absolute;
  top: 15px;
  left: 16px;
`;
