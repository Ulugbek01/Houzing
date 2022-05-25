import styled from "styled-components";
import mainImage from "../../assets/images/home-img.jpg";

export const Container = styled.div``;

export const MainSection = styled.div`
  /* background: url(${mainImage}) no-repeat center bottom; */
  /* background-size: cover; */
  min-height: 570px;
  position: relative;
  text-align: center;
`;

MainSection.Overflow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 111;
`;

MainSection.Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`;

MainSection.Discription = styled.p`
  color: #fff;
`;
