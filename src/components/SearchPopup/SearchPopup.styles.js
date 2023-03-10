import styled from "styled-components";

export const SearchPopupStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  transform: scale(1, 0);
  transform-origin: top center;
  transition: transform 0.7s ease;

  &.open {
    transform-origin: top center;
    transform: scale(1, 1);
    height: 100%;
  }
  .content-wrap {
    background-color: var(--color-white);
    width: 100%;
    min-height: 560px;
    position: relative;
    box-shadow: 0px 10px 40px 0 rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    @media #{$sm-layout} {
      min-height: 450px;
    }
  }
  .site-logo {
    position: absolute;
    top: 60px;
    left: 70px;

    img{
      max-height: 55px;
    }

    @media (max-width: 768px) {
      top: 40px;
      left: 20px;
    }
  }

  .close-button {
    position: absolute;
    right: 74px;
    top: 74px;

    @media (max-width: 768px) {
      top: 50px;
      right: 15px;
    }

    .close-trigger {
      background: transparent;
      border: none;
      color: var(--color-header);
      font-size: 22px;
      transition: 0.3s all;
    }

    &:hover{
        svg{
            color: var(--color-primary);

        }
    }
  }

  .inner {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    .search-form {
      position: relative;
      border-bottom: 1px solid var(--color-border);
      input {
        width: 100%;
        height: 90px !important;
        border: 0 none;
        border-radius: 5px;
        background: transparent;
        padding: 0;
        padding-right: 55px;
        font-weight: 00;
        font-family: var(--font-secondary);
        font-size: 24px !important;
        outline: none;
        @media #{$sm-layout} {
          font-size: 16px;
          height: 60px;
        }
      }
      .submit-button {
        position: absolute;
        right: 0;
        padding: 0;
        margin: 0;
        border: 0 none;
        outline: none;
        color: var(--color-heading);
        background: transparent;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        transition: var(--transition);
        &:hover {
          color: var(--color-primary);
        }
        @media #{$sm-layout} {
          font-size: 20px;
        }
      }
    }
  }
  &::before {
    position: absolute;
    background-color: transparent;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  /* 
  .no-topbar {
    .edu-search-popup {
      top: 0px;
    }
  } */
`;
