import styled from "styled-components";

export const CardGrid = styled("div")`
    display: grid;
    grid-template-rows: 1fr auto auto auto;
    row-gap: 8px;
    color: black;
    letter-spacing: 0.04em;

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
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

    }

    .profile_age {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }
`;
