import styled from "styled-components";

const leftToRight = (position) => {
  if (position === "left") {
    return {
      left: "32px",
    };
  } else {
    return {
      right: "32px",
    };
  }
};

export const Container = styled.div``;

export const NextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${({ position }) => leftToRight(position)}
  z-index: 99;
  cursor: pointer;

  :hover {
    opacity: 0.97;
  }
`;

/* Recommended styles */
export const RecommendedWrapper = styled.div`
  padding-top: 85px;
`;

RecommendedWrapper.Title = styled.h2``;
RecommendedWrapper.Discription = styled.p``;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
