import { Model } from "./Model";

export class Subject extends Model {
  /** @type string системное название предмета */
  _slug;
  /** @type string */
  _title;

  /**
   * @return string
   **/
  get slug () {
    return this._slug;
  }

  /**
   * @return { String }
   **/
  get title () {
    return this._title;
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
    const { id: _id, slug, title } = Model.transform( data );
    return Model.load( new Subject( slug, title ), { _id });
  }
}
