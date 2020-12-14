import { Model } from "./Model";

export class Subject extends Model {
  /** @type string системное название предмета */
  _slug;
  /** @type string */
  _title;
  /** @type Array */
  _tasks = [];

  get slug () {
    return this._slug;
  }

  get title () {
    return this._title;
  }

  get tasks () {
    return this._tasks;
  }

  set tasks( tasks ) {
    this._tasks = tasks;
  }

  constructor( slug, title ) {
    super();
    this._slug = slug;
    this._title = title;
  }
}
