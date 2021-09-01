export class Part {
    id: number;
	title: string;
	description: string;
	make: string;
	model: string;
	price: number;
	location: string;
	phone: string;
	state: string;

    constructor(obj?:any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || "";
        this.description = obj && obj.description || "";
        this.make = obj && obj.make || "";
        this.model = obj && obj.model || "";
        this.price = obj && obj.price || "";
        this.location = obj && obj.location || "";
        this.phone = obj && obj.phone || "";
        this.state = obj && obj.state || "";
    }
}