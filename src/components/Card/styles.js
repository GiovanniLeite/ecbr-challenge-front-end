import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 10px;
    color: #fff;

    @media screen and (max-width: 320px) {
      padding: 10px 8px;
    }

    #cardContent {
      overflow: hidden;
      background: ${theme.colors.primary};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;

      @media screen and (max-width: 768px) {
        max-width: 380px;
        margin: 0 auto;
        border-radius: 6px;
      }

      #cardImage {
        img {
          width: 100%;
          vertical-align: middle;
        }

        @media screen and (max-width: 320px) {
          max-height: 95px;
          overflow: hidden;
        }
      }

      h2 {
        font-weight: 300;
        font-size: 24px;
        margin: 7px 16px 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        @media screen and (max-width: 320px) {
          font-size: 18px;
          margin: 9px 11px 16px;
          line-height: 21px;
        }
      }

      #cardBottom {
        padding: 0 16px 16px;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 320px) {
          padding: 0 11px 11px;
        }

        button {
          cursor: pointer;
          border: none;
          border-radius: 8px;
          background-color: ${theme.colors.button};
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 18px;
          padding: 9px 12px;
          max-height: 39px;

          @media screen and (max-width: 320px) {
            font-size: 14px;
            padding: 7px 12px;
            border-radius: 6px;
          }
        }

        #price {
          display: flex;

          div {
            padding-top: 4px;

            p {
              color: #dadada;
              font-weight: 100;
              font-size: 12px;
              text-decoration: line-through;
              text-align: right;

              @media screen and (max-width: 320px) {
                font-size: 10px;
                line-height: 12px;
              }
            }

            h3 {
              font-weight: 700;
              font-size: 18px;
              line-height: 21px;

              @media screen and (max-width: 320px) {
                font-size: 14px;
                line-height: 16px;
              }
            }
          }

          span {
            margin-left: 10px;
            padding: 9px;
            min-width: 84px;
            background-color: ${theme.colors.discount};
            border-radius: 8px;
            text-align: center;
            font-weight: 700;
            font-size: 18px;
            line-height: 21px;

            @media screen and (max-width: 320px) {
              font-size: 14px;
              padding: 8px;
              min-width: 64px;
              border-radius: 6px;
              line-height: 16px;
            }
          }
        }
      }
    }
  `}
`;
