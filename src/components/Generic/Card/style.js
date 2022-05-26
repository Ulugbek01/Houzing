import styled, { css } from "styled-components";

const FlexBox = css`
  display: flex;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "380px")};
  background-color: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export const CardImgWrapper = styled.div``;
export const CardBody = styled.div``;

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

export const CardFooter = styled.div``;
