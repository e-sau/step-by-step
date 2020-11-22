import styled from "styled-components";

export const StyledBlockReviews = styled("div")`
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: calc(100% - 200px);
    // margin: auto;
    column-gap: 125px;
    row-gap: 25px;
    padding: 0 100px;
`;

export const StyledBlockAdvert = styled("div")`
  width: 100%;
/*  height: 800px;*/

  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #E33371;
    text-align: center;
  }

  .block_advert__image {
    background: url("https://a.bmstatic.com/iu/94/62/Mask Group (1)-443f7972ea170b028901a0d13f59538f.jpg") no-repeat;
    background-size: cover;
    height: 400px;
  }
`;

export const TextContainer = styled("div")`
  position: relative;
  z-index: 1;
  top: -100px;
  width: 820px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 10px 10px 20px rgba(71, 145, 219, 0.2);
  border-radius: 4px;
  margin: auto;
  padding: 40px;
  box-sizing: border-box;
  color: #484848;
`;

