import styled from "styled-components";

export const GridContainer = styled('div')`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    padding: 0px 52% 0 16%;
    align-items: start;

    .hidden {
        display: none;
    }

    .photo_container {
        justify-self: center;
        text-align: center;

        .content {
            margin: 0 auto;
            display: block;
            position: relative;
            width: 232px;
            height: 232px;
            cursor: pointer;
            user-select: none;

            &_item {
                width: 100%;
                height: 100%;
                border-radius: 51%;
            }
        }
    }
`;

export const Wrapper = styled("div")`
    transition: 1s;
    &:hover {
        background: #dddddd;
         .item_icon {
              display: flex;
         }
    }

    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    border-radius: 51%;

    .item_icon {
        color: #ffffff;
        transition: 1s;
        min-width: unset;

        display: none;
        width: 60px;

        font-size: 3em;
        width: 100%;
        height: 100%;

        align-items: center;
        justify-content: center;
    }
`;
