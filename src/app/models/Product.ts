

export default class Product {
    id?: number;
    product: string;
    amount: number;
    unit: string;
    note: string;
    done: boolean;

    constructor(
        product: string,
        amount:number,
        unit: string,
        note: string = "",
        done: boolean = true,
    ) {

        this.product = product;
        this.amount = amount;
        this.unit = unit;
        this.note = note;
        this.done = done;

    }
}