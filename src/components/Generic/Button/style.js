import styled from "styled-components";

export const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        color: "#fff",
        backgroundColor: "#0061DF",
        border: "1px solid #0061DF",
      };
    case "secondary":
      return {
        color: "#0D263B",
        backgroundColor: "transparent",
        border: "1px solid #0D263B",
      };
    default:
      return {
        color: "#fff",
        backgroundColor: "transparent",
      };
  }
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : 0)};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : 0)};
  margin: 0 ${({ mAuto }) => (mAuto ? "auto" : "")};
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;

  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;
