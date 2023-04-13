import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    color: #fff;
    background-color: ${theme.colors.primary};

    #navbar {
      max-width: 1180px;
      margin: 0 auto;

      a {
        width: 195px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 0;

        svg + svg {
          margin-left: 11px;
        }
      }
    }
  `}
`;
