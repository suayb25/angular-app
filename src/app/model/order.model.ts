import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()   //service olarak kullanılacağı zaman Injectable yapmamız gerekiyor
export class Order{
    public id:number;
    public name:string;
    public address:string;
    public city:string;
    public phone:string;
    public email:string;

    public isSent:boolean  = false;
    
    constructor(public cart:Cart){ //singelton olayı önemli

    }

    clearOrder(){
        this.id = null;
        this.name = this.address = this.city = this.phone = this.email= null;
        this.isSent = false;
        this.cart.clear();
    }
}