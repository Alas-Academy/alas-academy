import styled from "styled-components";

export const HeroStyled = styled.div`
  min-height: 660px;
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: var(--bg-color);
  overflow-x: hidden;

  @media (max-width: 1119px) {
    min-height: 600px;
  }
  @media (max-width: 991px) {
    min-height: 100%;
    padding-top: 95px;
  }
  @media (max-width: 767px) {
    padding-top: 75px;
  }

  .banner-content {
    position: relative;
    z-index: 1;
    color: var(--color-header);

    @media (max-width: 991px) {
      text-align: center;
      margin-bottom: 50px;
    }
    @media (max-width: 767px) {
      text-align: center;
      margin-bottom: 40px;
    }

    .title {
      margin-bottom: 18px;
      font-size: 50px;
      font-weight: bold;

      .highlight {
        color: var(--color-primary);
      }

      @media (max-width: 1119px) {
        br {
          display: none;
        }
      }
    }

    .subtitle {
      color: var(--color-header);
      /* font-size: 18px; */
      font-size: 20px;
      font-family: var(--font-primary);
      margin-bottom: 24px !important;
    }
  }

  .banner-thumbnail {
    margin-right: -75px;
    position: relative;
    z-index: 1;
    @media (max-width: 1119px) {
      margin-right: 0;
    }
    .thumbnail {
      text-align: right;
      @media (max-width: 991px) {
        text-align: center;
      }
      @media (max-width: 767px) {
        text-align: center;
      }
    }
    .instructor-info {
      position: absolute;
      bottom: 70px;
      left: 0;
      @media (max-width: 767px) {
        bottom: 40px;
      }
      .inner {
        background-color: var(--color-white);
        border-radius: 10px;
        padding: 26px 30px 16px;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);

        @media (max-width:326px){
          padding: 15px 10px 10px;
        }
        .title {
          margin-bottom: 5px;
        }
        .media {
          display: flex;
          .thumb {
            width: 175px;
            height: 60px;
            margin-left: -2px;

            img{
              width: 100%;
            }
          }
          .content {
            line-height: 1;
            color: var(--color-header);
            margin-top: 10px;
            font-family: var(--font-primary);
            font-size: 15px !important;

            span {
              display: block;
              font-weight: bold;
              color: var(--color-primary);
            }
          }
        }
      }
    }
  }
`;
