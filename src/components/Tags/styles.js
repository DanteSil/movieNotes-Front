import styled from "styled-components";

export const Container = styled.span`
  padding: 8px 16px;
  margin-right: 8px;

  font-family: 'Roboto';
  font-size: 12px;
  line-height: 14px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAG};
  color: ${({theme}) => theme.COLORS.TAG_COLOR};

  border-radius: 8px;



  color: #E5E5E5;
`