import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as filterIcon } from "../../assets/icons/setting-lines.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--width);
  width: 100%;
  padding: 10px 130px;
  margin: 0 auto;
`;

export const SearchIcon = styled(searchIcon)`
  margin-right: 8px;
`;

export const FilterIcon = styled(filterIcon)`
  margin-right: 8px;
`;

export const Advanced = styled.div``;

Advanced.Body = styled.div`
  padding: 10px;
`;

Advanced.Title = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--secondary-text-color);
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 10px 20px;
  margin-bottom: 20px;
`;

Advanced.Footer = styled.div`
  display: flex;
  align-items: center;
  /* background: #f6f8f9; */
  padding: 20px;
`;
