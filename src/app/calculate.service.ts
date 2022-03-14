import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  val1: number;
  val2: number;
  result: number;
  range: number;
  znak: number;
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  generate()
  {
    if(this.range===1){
       this.val1 = this.getRandomInt(8);
       this.val2 = this.getRandomInt(8);
    } 
    if(this.range===2){
      this.val1 = this.getRandomInt(32);
      this.val2 = this.getRandomInt(32);
   } 

   if(this.range===3){
    this.val1 = this.getRandomInt(64);
    this.val2 = this.getRandomInt(64);
 }
 let str = "";
 console.log(this.val1);
 console.log(this.val2);
 if(this.znak===2){
   this.result = this.val1 + this.val2;
 }
 else if(this.znak===1){
  this.result = this.val1 - this.val2;
 }
 while(this.val1>7){
   
  str= (this.val1%8).toString() + str;
  this.val1 = Math.floor(this.val1/8);
 }
 str= this.val1 + str;
 this.val1 = parseInt(str) ;
 console.log(str);
  str = "";
 while(this.val2>7){
  str= (this.val2%8).toString() + str;
  this.val2 = Math.floor(this.val2/8);
 }
 str= this.val2 + str;
 this.val2 = parseInt(str) ;
 console.log(this.val2);
 console.log(this.result);
 str = "";
 while(this.result>7){
  str= (this.result%8).toString() + str;
  this.result = Math.floor(this.result/8);
 }
 str= this.result + str;
 this.result = parseInt(str) ;
 console.log(this.val1);
 console.log(this.val2);
 console.log(this.result);
  }
  addNum(){

    let a=this.val1;
   let  b=this.val2;
    
    var sum=0, carry=0, d=0, m = 1;
    while(a|| b|| carry) 
    {
    d=0;
    d=carry+(a%10)+(b%10);
    d=Math.floor(d);
    //alert(d);
    a/=10;
    a=Math.floor(a);
    b/=10;
    b=Math.floor(b);
    if(d>7) {
    carry=1;
    d=d%8;
    d=Math.floor(d);
    } else {
    carry = 0;
    }
    sum += d*m;
    m *= 10;
    }
    
    this.result=sum;
  }
  add(num){

    let a=this.val1;
   let  b=parseInt(num);
    
    var sum=0, carry=0, d=0, m = 1;
    while(a|| b|| carry) 
    {
    d=0;
    d=carry+(a%10)+(b%10);
    d=Math.floor(d);
    //alert(d);
    a/=10;
    a=Math.floor(a);
    b/=10;
    b=Math.floor(b);
    if(d>7) {
    carry=1;
    d=d%8;
    d=Math.floor(d);
    } else {
    carry = 0;
    }
    sum += d*m;
    m *= 10;
    }
    
    this.val1=sum;
  }
  constructor() { }
}
