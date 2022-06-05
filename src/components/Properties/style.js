import styled from "styled-components";

export const Container = styled.div`
  /* padding: 0 130px; */
`;

export const PropertiesTitle = styled.h2`
  margin-top: 64px;
`;

export const PropertiesDiscription = styled.p`
  margin-bottom: 64px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  padding: 0 130px;
  gap: 20px;
  margin: 0 auto 48px;

  & > div {
    width: 350px;
    min-height: 490px;
    max-height: 500px;
  }

  & > div.loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Loading = styled.div``;
