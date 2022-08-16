import styled from "styled-components";

import backgroundIMG from '../../assets/backgroundIMG.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 134px;

  >h1 {
    color: ${({ theme }) => theme.COLORS.PINK};

    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
  }

  >P {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  >h2 {
    margin: 48px 0 ;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .button {
    margin: 24px 0 42px;
  }

  >a {
    color: ${({ theme }) => theme.COLORS.PINK};

    text-align: center;
  }

  >div:nth-child(4) {
    margin-bottom: 8px;
  }
`

export const Background = styled.div`
   flex: 1;
   background: url(${backgroundIMG})  no-repeat center;
   background-size: cover;
`