import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    padding: 45px 0;

    @media screen and (max-width: 680px) {
      padding: 16px 0 32px;
    }

    section {
      max-width: 1200px;
      margin: 0 auto;

      h1 {
        font-weight: 300;
        font-size: 36px;
        margin-bottom: 22px;
        color: #fff;
        padding-left: 10px;

        @media screen and (max-width: 1220px) {
          padding-left: 20px;
        }

        @media screen and (max-width: 1040px) {
          padding-left: 122px;
        }

        @media screen and (max-width: 895px) {
          padding-left: 50px;
        }

        @media screen and (max-width: 810px) {
          padding-left: 10px;
        }

        @media screen and (max-width: 680px) {
          margin-bottom: 3px;
          font-size: 18px;
          padding-left: 0;
          text-align: center;
        }
      }

      #filters {
        display: flex;
        justify-content: space-between;
        margin-bottom: 27px;
        height: 50px;
        padding: 0 10px;

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

        @media screen and (max-width: 680px) {
          margin-bottom: 13px;
          height: auto;
        }

        form {
          #search {
            display: flex;
            border-radius: 8px;
            background-color: ${theme.colors.primary};
            width: 380px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            @media screen and (max-width: 950px) {
              width: 323px;
            }

            button {
              cursor: pointer;
              border: none;
              border-radius: 8px;
              background-color: ${theme.colors.primary};
              padding: 0 20px 0 20px;
            }

            input {
              width: calc(100% - 70px);
              border: none;
              border-radius: 8px;
              background-color: ${theme.colors.primary};
              color: #dadada;
              padding: 14px 0;

              font-family: 'Roboto', sans-serif;
              font-style: normal;
              font-weight: 100;
              font-size: 18px;
            }
          }
        }

        div#ordination {
          & > span {
            margin-right: 20px;
            color: #fff;
            font-weight: 700;
            font-size: 18px;
            display: flex;
            align-items: center;
            height: 50px;
            float: left;

            @media screen and (max-width: 680px) {
              margin-right: 0;
              font-size: 10px;
              display: block;
              text-align: center;
              height: 12px;
              float: none;
              margin-bottom: 4px;
              height: auto;
            }
          }

          ul#order {
            line-height: 21px;
            font-weight: 100;
            font-size: 18px;
            color: #dadada;
            float: right;

            @media screen and (max-width: 680px) {
              line-height: 16px;
              font-size: 14px;
            }

            span {
              cursor: pointer;
              background-color: ${theme.colors.primary};
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              padding: 14px 17px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              min-width: 180px;
              justify-content: space-between;

              @media screen and (max-width: 680px) {
                padding: 10px 8px;
                min-width: auto;
              }

              svg {
                margin-left: 19px;

                @media screen and (max-width: 680px) {
                  margin-left: 6px;
                }
              }
            }

            li {
              cursor: pointer;
              list-style: none;
              color: #dadada;
            }

            li.hidden {
              display: none;
            }

            li.visible {
              display: block;
              margin-top: -6px;

              ul {
                border-radius: 0 0 8px 8px;
                background-color: ${theme.colors.primary};
                padding-bottom: 9px;

                li {
                  padding: 7px 17px;
                }

                li.active {
                  color: ${theme.colors.button1};
                  font-weight: 400;
                }
              }
            }
          }
        }
      }

      #games {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;

        @media screen and (max-width: 1220px) {
          padding: 0 10px;
        }

        @media screen and (max-width: 1040px) {
          grid-template-columns: 50% 50%;
          padding: 0 112px;
        }

        @media screen and (max-width: 895px) {
          padding: 0 40px;
        }

        @media screen and (max-width: 810px) {
          padding: 0;
        }

        @media screen and (max-width: 680px) {
          grid-template-columns: 100%;
        }
      }

      button#viewMore {
        cursor: pointer;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
        border-radius: 8px;
        background-color: ${theme.colors.primary};
        padding: 15px;
        width: 380px;
        color: #dadada;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        font-size: 18px;
        display: block;
        margin: 0 auto;
        margin-top: 30px;

        @media screen and (max-width: 680px) {
          margin-top: 20px;
        }

        @media screen and (max-width: 400px) {
          width: calc(100% - 20px);
        }

        @media screen and (max-width: 320px) {
          width: calc(100% - 16px);
        }
      }
    }
  `}
`;
