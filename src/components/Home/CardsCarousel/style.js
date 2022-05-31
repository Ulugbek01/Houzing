import styled from "styled-components";
import { ReactComponent as arrowLeft } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as arrowRight } from "../../../assets/icons/right-arrow.svg";

const leftToRight = (position) => {
  if (position === "left") {
    return {
      left: "-60px",
    };
  } else {
    return {
      right: "-60px",
    };
  }
};

export const Container = styled.div`
  max-width: 1296px;
  margin: 0 auto;
`;

/* Recommended styles */
export const CardsCarouselWrapper = styled.div`
  padding-top: 85px;
  max-width: 1180px;
  margin: 0 auto;
`;

CardsCarouselWrapper.Title = styled.h2``;
CardsCarouselWrapper.Discription = styled.p`
  margin-bottom: 32px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const NextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 40%;
  ${({ position }) => leftToRight(position)}
  z-index: 99;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  cursor: pointer;

  :hover {
    opacity: 0.97;
  }
`;

export const ArrowLeft = styled(arrowLeft)`
  path {
    fill: #0d263b;
  }
`;

export const ArrowRight = styled(arrowRight)`
  path {
    fill: #0d263b;
  }
`;
