import styled from "styled-components";

export const CardGrid = styled("div")`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 8px;
  color: black;
  letter-spacing: 0.04em;
  padding: 0 16px;
  align-items: center;

  .photo_container {
    padding: 20px;
    margin: 0 auto;

    .photo {
      height: 150px;
      background: #ddd;
      border-radius: 51%;
      width: 150px;
    }
  }

  .profile_fio {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }

  .profile_age {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;
