import { Products } from "./products";
import { Scheduler } from "./scheduler";

export class Orders{
    constructor(){

    }
    orderNumber:string;
    deliveryPlace:string;
    deliveryDate:Date;
    quantity:string;
    customerId:string;
    productId:Products;
    schedulerId:Scheduler;
}