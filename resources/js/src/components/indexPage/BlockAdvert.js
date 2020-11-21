import React from "react";
import { StyledBlockAdvert, TextContainer } from "./styled.sc";
import { Summary } from "../Summary/Summary";

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
]
