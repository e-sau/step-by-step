import React, { Fragment } from "react";
import styled from "styled-components";
import { GoBackLink } from "../components/ui/GoBackLink";

const Container = styled("div")`
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    color: #4791db;
    text-shadow: 11px 10px rgba(71,145,219,0.2);
    font-size: 8em;
  }
`;
/**
 * @todo отрефакторить когда будет готов макет, либо набросать самим
 **/
export default function NotFoundPage() {
  return (
    <Fragment>
      <GoBackLink to={"/"}>
        На главную
      </GoBackLink>
      <Container>
        <h1>404</h1>
      </Container>
    </Fragment>
  );
}
