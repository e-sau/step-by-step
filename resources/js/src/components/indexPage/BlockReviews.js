import React from "react";
import { StyledBlockReviews } from "./styled.sc";
import { Card } from "../Card/Card";

export function BlockReviews() {
  return (
    <StyledBlockReviews>
      {REVIEWS_ARRAY.map(( review, index )  => <Card key={index} review={review} />)}
    </StyledBlockReviews>
  );
}

const REVIEW = { author: "Ольга Иванова", text: "«Мы занимаемся уже второй год. Моей дочке особенно нравится курс математики и уроки с роботом. Мы его для себя открыли недавно и уже прошли достаточно приличное количество карточек.»", image: "https://a.bmstatic.com/iu/10/156/Ellipse 1-0e7525ab21e35a4782bc172489117311.png" };

const REVIEWS_ARRAY = Array(12).fill(REVIEW);
