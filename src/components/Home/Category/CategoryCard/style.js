import styled from "styled-components";

export const Card = styled.div`
  max-width: 280px;
  position: relative;
  border: 1px solid red;
`;

Card.ImgWrapper = styled.div``;

Card.Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

Card.Title = styled.h4`
  font-size: 18px;
  line-height: 28px;
  position: absolute;
  top: 50%;
  color: #fff;
`;
