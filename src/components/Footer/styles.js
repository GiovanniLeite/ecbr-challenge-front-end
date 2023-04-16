import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    color: #fff;
    background-color: ${theme.colors.primary};
    padding: 61px 0;

    @media screen and (max-width: 680px) {
      padding: 22px 0 5px;
    }

    .footerContent {
      max-width: 1180px;
      margin: 0 auto;

      @media screen and (max-width: 1220px) {
        padding: 0 20px;
      }

      @media screen and (max-width: 1040px) {
        padding: 0 122px;
      }

      @media screen and (max-width: 895px) {
        padding: 0 50px;
      }

      @media screen and (max-width: 810px) {
        padding: 0 10px;
      }

      .logo {
        display: flex;
        justify-content: center;

        #desktopIcon {
          @media screen and (max-width: 680px) {
            display: none;
          }
        }

        #mobileIcon {
          display: none;

          @media screen and (max-width: 680px) {
            display: block;
          }
        }
      }

      p {
        font-weight: 300;
        font-size: 14px;
        line-height: 25px;
        margin: 33px 0 20px;
        color: #dadada;

        @media screen and (max-width: 680px) {
          text-align: center;
          font-size: 10px;
          line-height: 15px;
          max-width: 380px;
          margin: 14px auto 12px;
        }
      }

      .footerLinks {
        @media screen and (max-width: 680px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          line-height: 25px;

          @media screen and (max-width: 680px) {
            font-size: 12px;
            line-height: 22px;
            margin-bottom: 10px;
          }
        }

        a + a {
          margin-left: 46px;

          @media screen and (max-width: 680px) {
            margin-left: 0;
          }
        }
      }
    }
  `}
`;
