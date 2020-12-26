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

  /**
   * Флаг указывающий выполена ли задача
   * @type Boolean
   **/
  completed;

  /**
   * Ссылка на картинку
   * @type String
   **/
  image;

  /**
   * @param { Number } difficult
   * @param { String } title
   * @param { String } description
   * @param { Number|String } solution
   *
   * @return { void }
   **/
  constructor( difficult, title, description, solution ) {
    super();

    this.difficult = difficult;
    this.title = title;
    this.description = description;
    this.solution = solution;
  }

  get help() {
    return "Попробуй еще раз!)";
  }

  getData() {
    return {
      title: this.title,
      description: this.description,
      difficult: this.difficult,
      solution: this.solution,
      image: this.image
    };
  }

  /**
   * Статический фабричный метод, создания отзыва
   * @param { Object } data
   * @return { Review }
   **/
  static buildTask( data ) {
    const { id, difficult, title, description, solution, image, completed } = Model.transform( data );
    const task = new Task( difficult, title, description, solution );
    task.id = id;
    task.image = image;
    task.completed = completed;

    return Model.load( task );
  }
}
