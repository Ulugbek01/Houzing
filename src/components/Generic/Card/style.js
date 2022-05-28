import styled, { css } from "styled-components";

const getPosition = (value) => {
  switch (value) {
    case "left":
      return {
        top: "20px",
        left: "20px",
      };
    case "right":
      return {
        top: "20px",
        right: "20px",
      };
    default:
      return "";
  }
};

const FlexBox = css`
  display: flex;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "380px")};
  background-color: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const CardImgWrapper = styled.div`
  position: relative;
`;

export const CardBody = styled.div`
  position: relative;
  padding: 24px 20px 0;
`;

export const CradBtn = styled.div`
  display: inline-block;
  padding: 5px 12px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  color: #fff;
  background: ${({ primary }) =>
    primary === "primary" ? "#0061DF" : "#0D263B"};
  border-radius: 3px;
  position: absolute;

  ${({ value }) => getPosition(value)}
`;

CardBody.Avatar = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  border: 2px solid #fff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  border-radius: 50%;
`;

CardBody.InfoWrapper = styled.div``;

CardBody.Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--secondary-text-color);
`;

CardBody.Discription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-color);
`;

export const IconsContainer = styled.div`
  ${FlexBox};
  justify-content: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

IconWrapper.SubTitle = styled.p`
  color: var(--text-color);
  font-size: 14px;
  line-height: 24px;
`;

export const CardFooter = styled.div`
  ${FlexBox};
  justify-content: space-between;
  padding: 8px 20px;
  border-top: 1px solid #e6e9ec;
`;

CardFooter.Left = styled.div``;

CardFooter.DiscountPrice = styled.p`
  font-size: 12px;
  color: var(--text-color);
  text-decoration: line-through;
`;

CardFooter.OriginalPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: var(--secondary-text-color);
  margin-bottom: 0;
`;

CardFooter.Right = styled.div`
  ${FlexBox};
`;

CardFooter.IconWrapper = styled.div`
  ${FlexBox};
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
`;
