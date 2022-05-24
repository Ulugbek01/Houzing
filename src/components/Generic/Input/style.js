import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const Container = styled.input`
  font-family: "Montserrat", sans-serif;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: 16px;
  color: #0d263b;
  border: 1px solid #e6e9ec;
  outline: none;
  :focus {
    border: 1px solid #40a9ff;
  }
`;
