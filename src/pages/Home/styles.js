import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};

    section {
      max-width: 1180px;
      margin: 0 auto;
    }
  `}
`;
