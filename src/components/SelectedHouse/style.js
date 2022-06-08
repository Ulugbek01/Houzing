import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const ProductView = styled.div``;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const Hero = styled.div``;

Hero.ImgWrapper = styled.div`
  ${flexBox};
  justify-content: space-between;
  padding: 24px 0;
`;

Hero.ImgWrapper.Left = styled.div``;
Hero.ImgWrapper.Right = styled.div`
  div .img {
    padding: 5px;
  }
`;

Hero.Info = styled.div``;
Hero.Info.Left = styled.div``;

Hero.Title = styled.h2`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
`;

Hero.Info.Header = styled.div`
  ${flexBox};
  .text {
    color: #696969;
  }
`;

Hero.Info.IconWrapper = styled.div`
  ${flexBox};
  justify-content: space-between;
  max-width: 570px;

  span {
    ${flexBox};

    .space {
      margin-right: 8px;
    }
  }
`;

export const IconWrapper = styled.div`
  ${flexBox};
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #f6f8f9;
  border-radius: 50%;
`;

Hero.Info.Header.Icons = styled.div`
  ${flexBox};
`;

Hero.Info.Header.Icons.Share = styled.div`
  ${flexBox};
`;

Hero.Info.Header.Icons.Save = styled.div`
  ${flexBox};
`;

Hero.Info.Header.Price = styled.div`
  .month-price {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #0d263b;
  }
`;

export const AsideCard = styled.div`
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  padding: 24px;

  input {
    border: none;
    border-bottom: 1px solid #e6e9ec;
  }

  input:focus {
    border: none;
    border-bottom: 1px solid #0d263b;
  }
`;

AsideCard.User = styled.div`
  ${flexBox};
  margin-bottom: 24px;

  .user-img {
    margin-right: 8px;
  }

  .user-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    margin-bottom: 0;
  }

  .tel {
    color: #696969;
  }
`;
