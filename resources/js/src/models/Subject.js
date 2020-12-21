import { Model } from "./Model";
import moment from "moment";

export class Subject extends Model {
  /** @type String системное название предмета */
  _slug;
  /** @type String */
  _title;
  /** @type Number */
  _score;
  /** @type Number */
  _grade;
  /** @type String Дата выполнения предмета*/
  _completeDate;
  
  /**
   * @return string
   **/
  get slug() {
    return this._slug;
  }

  /**
   * @return { String }
   **/
  get title() {
    return this._title;
  }

  /**
   * @return { String }
   **/
  get completeDate() {
    if ( !this._completeDate ) {
      return null;
    }
    return moment( this._completeDate ).format("DD.MM.YYYY");
  }

  /**
   * @return { void }
   **/
  set completeDate( value ) {
    this._completeDate = value;
  }

  /**
   * @return { Number }
   **/
  get grade() {
    return this._grade;
  }

  /**
   * @return { void }
   **/
  set grade( value ) {
    this._grade = value;
  }

  /**
   * @return { String }
   **/
  get score() {
    if ( !this._completeDate ) {
      return null;
    }
    return this._score.toFixed( 1 );
  }

  /**
   * @return { String }
   **/
  set score( value ) {
    this._score = value;
  }

  /**
   * @param { String } slug
   * @param { String } title
   *
   * @return { void }
   **/
  constructor( slug, title ) {
    super();
    this._slug = slug;
    this._title = title;
  }

  /**
   * Статический фабричный метод, создания предмета
   * @param { Object } data
   * @return { Subject }
   **/
  static buildSubject( data ) {
    const { id, slug, title, score, grade, completeDate } = Model.transform( data );
    const subject = new Subject( slug, title );
    subject.id = id;
    subject.score = score;
    subject.grade = grade;
    subject.completeDate = completeDate;

    return Model.load( subject );
  }
}
