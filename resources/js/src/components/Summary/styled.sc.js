import styled from "styled-components";

export const StyledSummary = styled("details")`
  font-size: 16px;
  line-height: 19px;
  margin: 30px 0;
  &[open] > summary:after {
    background: url("https://a.bmstatic.com/iu/244/40/remove-circle-060d3fc75559a3c50fe2c7a9eecee93c.png");
    background-size: contain;
  }

  p {
    padding-left: 40px;
  }

  summary {
    &:focus {
      outline: none;
    }
    span {
      padding-left: 20px;
    }

    &::-webkit-details-marker {
      display: none
    }
    &:after {
      background: url("https://a.bmstatic.com/iu/183/100/add-circle-00bd463dcf03e10023382a6651647cc6.png");
      background-size: contain;
      float: left; 
      height: 20px;
      width: 20px;
      content: " ";
    }
  }
`;
