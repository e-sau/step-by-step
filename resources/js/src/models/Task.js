import { Model } from "./Model";

export class Task extends Model {
  /**
   * Сложность задачи
   * @type Number
   **/
  difficult;
  /**
   * Заголовок задачи
   * @type String
   **/
  title;
  /**
   * Описание задачи
   * @type String
   **/
  description;
  /**
   * Ожидаемое решение
   * @type Number|String
   **/
  solution;
  /**
   * Дата создания задачи, формат ISO-806
   * @type String
   **/
  createdAt;
  /**
   * Дата изменения задачи, формат ISO-806
   * @type String
   **/
  updatedAt;

  constructor( difficult, title, description, solution ) {
    super();

    this.difficult = difficult;
    this.title = title;
    this.description = description;
    this.solution = solution;
  }

  /**
   * Статический фабричный метод, создания отзыва
   * @return { Review }
   **/
  static buildReview( data ) {
    const { id: _id, difficult, title, description, solution } = Model.transform( data );
    const task = new Task( difficult, title, description, solution );

    return Model.load( task, { _id });
  }
}
