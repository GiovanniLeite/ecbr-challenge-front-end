import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    color: #fff;
    background-color: ${theme.colors.primary};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    #navbar {
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

      a {
        width: 195px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 0;

        @media screen and (max-width: 680px) {
          margin: 0 auto;
        }

        svg + svg {
          margin-left: 11px;
        }
      }
    }
  `}
`;
