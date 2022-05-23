import styled, { css } from "styled-components";
import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const Header = styled.div`
  ${flexBox};
  background-color: var(--primary-bg-color);
`;

export const Container = styled.div`
  ${flexBox};
  justify-content: space-between;
  max-width: var(--width);
  margin: 0 auto;
  width: 100%;
  padding: 10px 130px;
`;

export const NavItemsWrapper = styled.div``;

export const Logo = styled.div`
  ${flexBox};
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;

Logo.Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-left: 12px;
`;

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "#00fff5" : "#fff",
    margin: "0 32px",
  };
};
