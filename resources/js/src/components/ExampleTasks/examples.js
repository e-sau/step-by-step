import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import React from "react";

/**
 * @todo вынести и проработать в ракмказ задачи https://igorskipper.atlassian.net/browse/IS100-18
 **/
export const examples = [
  {
    id: 1,
    description: "Мама пошла за мороженым. Купила 3 пломбира для папы, 1 эскимо для себя и 3 рожка для Тани и Пети. Сколько мороженого купила мама?",
    firstStep: "Сложи числа",
    secondStep: "Запиши ответ",
    taskComponent: function Component(){
      return (
        <div style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",
          alignItems: "center",
        }}>
          <img src={ "/images/tasks/example/example-1.png" } alt="example-1"/>
          <TextField disabled style={{ background: "#dddddd" }} variant={ "outlined" } />
        </div>
      );
    }
  },
  {
    id: 2,
    description: "Дане подарили книгу про приключения незнайки. Книга из 105 страниц. Даня прочитал уже 75 страниц. Сколько страниц осталось прочитать Дане?",
    firstStep: "Выполни вычитание",
    secondStep: "Запиши ответ",
    taskComponent: function Component(){
      return <TextField disabled style={{ background: "#dddddd", width: "100%" }} variant={ "outlined" } />;
    }
  },
  {
    id: 3,
    description: "Дедушка попросил Федю отрезать 1 метр 75 см веревки. Федя отрезал 13 дециметров и 55 см. Правильно ли отрезал Федя?",
    firstStep: "Сравни числа",
    secondStep: "Запиши ответ",
    taskComponent: function Component(){
      return (
        <div style={{
          display: "grid",
          gridTemplateColumns: "20% 80%",
          alignItems: "center",
        }}>
          <div style={{ display: "grid" }}>
            <FormControlLabel
              disabled
              control={ <Checkbox/> }
              label="Да"
              labelPlacement="end"
            />
            <FormControlLabel
              disabled
              control={ <Checkbox/> }
              label="Нет"
              labelPlacement="end"
            />
          </div>
          <img src={ "/images/tasks/example/example-2.png" } alt="example-1"/>
        </div>
      );
    }
  },
];