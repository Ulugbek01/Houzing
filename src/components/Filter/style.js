import styled from "styled-components";
import { ReactComponent as searchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as filterIcon } from "../../assets/icons/setting-lines.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--width);
  width: 100%;
  padding: 10px 130px;
`;

export const SearchIcon = styled(searchIcon)`
  margin-right: 8px;
`;

export const FilterIcon = styled(filterIcon)`
  margin-right: 8px;
`;
