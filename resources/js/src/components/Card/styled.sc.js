import styled from "styled-components";

export const StyledCard = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;

  &:nth-child(odd) {
    grid-row: 1;
  }

  img {
    width: 85px;
    height: 85px;
    margin-right: 20px;
    border-radius: 50%;
  }

  div {
    h6 {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
