import styled from "styled-components";
import mainImage from "../../assets/images/home-img.jpg";

export const Container = styled.div``;

export const MainSection = styled.div`
  background: url(${mainImage}) no-repeat center bottom;
  background-size: cover;
  min-height: 570px;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
    top: 0;
    left: 0;
  }
`;
