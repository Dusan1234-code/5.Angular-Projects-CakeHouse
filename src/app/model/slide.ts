

export class Slide {
    _id: number;
    text: string;
    image: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.text = obj && obj.text || "";
        this.image = obj && obj.image || "";
    }
}