import { Model } from "./Model";
import { User } from "./User";

/**
 * Класс отражающий сущьность отзыва
 * @extends Model
 **/
export class Review extends Model {

  /**
   * Пользователь оставивший отзыв
   * @type User
   **/
  _author;

  /**
   * Текст отзыва
   * @type string
   **/
  _message;

  /**
   * Дата и время когда отзыв оставили, ISO-806
   * @type string
   **/
  _datetime;

  get author() {
    return this._author;
  }

  get message() {
    return this._message;
  }

  get datetime() {
    return this._datetime;
  }

  constructor( author, message, datetime ) {
    super();

    if ( !(author instanceof User) ) {
      throw new TypeError("author must be instanceof User");
    }

    this._author = author;
    this._message = message;
    this._datetime = datetime;
  }

  /**
   * Статический фабричный метод, создания отзыва
   * @return { Review }
   **/
  static buildReview( data ) {
    const { id: _id, message, user: plainUser, createdAt } = Model.transform( data );
    const review = new Review( User.buildUser( plainUser ), message, createdAt );

    return Model.load( review, { _id });
  }
}