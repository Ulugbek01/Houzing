import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  ${flexBox};
  background-color: var(--primary-bg-color);
  padding: 10px 130px;
`;

export const Container = styled.div`
  ${flexBox};
  justify-content: space-between;
  max-width: var(--width);
  margin: 0 auto;
  width: 100%;
`;

export const NavItemsWrapper = styled.div``;

export const LogoWrapper = styled.div`
  ${flexBox};
`;
