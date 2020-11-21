import { Model } from "./Model";

export class Subject extends Model {
    id;
    title;
    grade = 1;
    tasks = [];

    constructor(id, title) {
        super();
        this.id = id;
        this.title = title;
    }
}
