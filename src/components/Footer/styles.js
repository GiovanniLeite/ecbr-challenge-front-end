import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    color: #fff;
    background-color: ${theme.colors.primary};
    padding: 61px 0;

    .footerContent {
      max-width: 1180px;
      margin: 0 auto;

      .logo {
        display: flex;
        justify-content: center;
      }

      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 25px;
        margin-top: 33px;
        margin-bottom: 20px;
      }

      .footerLinks {
        a {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          line-height: 25px;
        }

        a + a {
          margin-left: 46px;
        }
      }
    }
  `}
`;
