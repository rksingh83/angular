export class Address {
     constructor(
          public addressTpe:String ,
          public  addressLine1:String ,
          public  zip:Number ,
          public  residency:Array<String> = new Array<String>()
          ){
               
          }

}
