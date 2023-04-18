import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    min-height: 650px;
    padding-top: 100px;

    h1 {
      text-align: center;
      color: #fff;
    }
  `}
`;
