import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid #000;
    height: 100px;
    width: 200px;
  `}
`;
