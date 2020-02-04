import { Address } from "./Address.model";
export class User {
    constructor(public id:Number ,
     public firstName:String,
     public lastName:String,
     public address:Address){};
}
