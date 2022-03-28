

export class User {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.email = obj && obj.email || "";
    }
}