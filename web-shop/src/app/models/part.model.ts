export class Part {
    _id: number;
    title: string;
    brand: string;
    category: string;
	price: number;
	description: string;
	phone: string;
	image: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.title = obj && obj.title || "";
        this.brand = obj && obj.brand || "";
        this.category = obj && obj.category || "";
        this.price = obj && obj.price || "";
        this.description = obj && obj.description || "";
        this.phone = obj && obj.phone || "";
        this.image = obj && obj.image || "";
    }
}