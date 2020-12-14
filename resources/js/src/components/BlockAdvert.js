import React from "react";
import { Summary } from "./Summary";
import styled from "styled-components";

export const StyledBlockAdvert = styled("div")`
  width: 100%;
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
  max-width: 820px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 10px 10px 20px rgba(71, 145, 219, 0.2);
  border-radius: 4px;
  margin: auto;
  padding: 40px;
  box-sizing: border-box;
  color: #484848;
`;


export function BlockAdvert() {
  return (
    <StyledBlockAdvert>
      <div className="block_advert__image"/>
      <TextContainer>
        <h4>Наши преимущества</h4>
        {ADVANTAGES_ARRAY.map(advantage => <Summary key={ advantage.heading } summary={advantage} />)}
      </TextContainer>
    </StyledBlockAdvert>
  );
}

const ADVANTAGES_ARRAY = [
  { heading: "Повышение образовательных результатов", text: "Измерения показывают: при регулярных занятиях на сайте ученики на 30% успешнее справляются с контрольными работами в школе и олимпиадными заданиями." },
  { heading: "Усвоение материала без пробелов", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id hendrerit quam." },
  { heading: "Рост интереса к обучению", text: "Mauris non nisl non felis volutpat rutrum." },
  { heading: "Статистика в реальном времени", text: "Cras aliquam hendrerit luctus. Fusce in vulputate ante." }
];
