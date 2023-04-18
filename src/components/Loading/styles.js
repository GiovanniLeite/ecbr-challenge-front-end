import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 10px auto 0;

    .loading {
      animation: is-rotating 1s infinite;
      border: 6px solid #e5e5e5;
      border-radius: 50%;
      border-top-color: ${theme.colors.primary};
      height: 50px;
      width: 50px;
      margin: 0 auto;
    }

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  `}
`;
