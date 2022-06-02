import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  position: relative;
`;

Card.ImgWrapper = styled.div`
  border-radius: 3px;
`;

Card.Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;

Card.Title = styled.h4`
  font-size: 18px;
  line-height: 28px;
  color: #fff;
`;

Card.Overliy = styled.div`
  width: 100%;
  position: absolute;
  top: 40%;
  text-align: center;
`;
