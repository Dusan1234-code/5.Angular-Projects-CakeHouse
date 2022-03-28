

export class Cake {
    _id: number;
    name: string;
    ingredients: string;
    description: string;
    origin: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.name = obj && obj.name || "";
        this.ingredients = obj && obj.ingredients || "";
        this.description = obj && obj.description || "";
        this.origin = obj && obj.origin || "";
    }
}