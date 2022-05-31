import styled from "styled-components";

export const TopHomeWrapper = styled.div`
  position: relative;
`;

TopHomeWrapper.Img = styled.div``;

TopHomeWrapper.Overliy = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  top: 0;
  left: 0;
  text-align: center;
  padding: 18% 30%;
`;

TopHomeWrapper.Title = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 48px;
`;
