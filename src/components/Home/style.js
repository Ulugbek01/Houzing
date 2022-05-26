import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

export const Container = styled.div``;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
`;

Img.Owerliy = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  text-align: center;
`;

Img.Owerliy.Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`;

Img.Owerliy.Discription = styled.p`
  color: #fff;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

IconWrapper.SubTitle = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 24px;
`;

IconWrapper.Price = styled.h3`
  color: #fff;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin-bottom: 36px;
`;

export const Bed = styled(bed)`
  & path {
    fill: #fff;
  }
`;

export const Bath = styled(bath)`
  & path {
    fill: #fff;
  }
`;

export const Car = styled(car)`
  & path {
    fill: #fff;
  }
`;

export const Ruler = styled(ruler)`
  & path {
    fill: #fff;
  }
`;
