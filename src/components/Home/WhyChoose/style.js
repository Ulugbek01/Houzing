import styled from "styled-components";

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
`;

export const WhyChooseUs = styled.div`
  background-color: #f5f7fc;
  padding: 48px 130px;
  margin-top: 48px;
`;

export const Properties = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-top: 40px;
`;

Properties.Item = styled.div`
  max-width: 245px;
`;

Properties.Item.Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin: 24px 0 8px 0;
  color: var(--secondary-text-color);
`;

Properties.Item.Text = styled.p`
  line-height: 24px;
  color: var(--text-color);
`;
