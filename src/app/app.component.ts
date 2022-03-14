import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateService } from './calculate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gor1';
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: CalculateService) {
    this.myForm = formBuilder.group({
      number: new FormControl('', Validators.required),
      znak: new FormControl('', Validators.required),
      number1: new FormControl('', Validators.required),
      number2: new FormControl('', Validators.required),
      corNum: new FormControl('', Validators.required)
    });

  }
clearCalc(): void{
  this.myForm.reset()
}
numClick(){
  let number = document.getElementById("calcNum") ;
  number.value = number.value + this.innerHTML;
  console.log(number);
 console.log(this);

}
addFun(){
  let number = document.getElementById("calcNum") ; 
  this.dataService.val1 = number.value;
  console.log(this.dataService.val1);
this.myForm.reset();
}
submitFun(){
  let number = document.getElementById("calcNum") ; 
  this.dataService.add( number.value);
  console.log(this.dataService.val1);
  number.value = this.dataService.val1;
}
generate()
{
  document.getElementById("calcNum1").value = "";
  document.getElementById("calcNum2").value = "";
  document.getElementById("znak").value = "";
  document.getElementById("corNum").value = "";
  let i=1;
 document.getElementsByName("ch1").forEach((e)=>{
   if(e.checked){
     this.dataService.range=i;
   }
   i++;
  })
  i=1;
  document.getElementsByName("ch2").forEach((e)=>{

    if(e.checked){
      this.dataService.znak=i;
    }
    i++;
   })
   this.dataService.generate();
   document.getElementById("calcNum1").value = this.dataService.val1;
   document.getElementById("calcNum2").value = this.dataService.val2;
   if(this.dataService.znak===1)
   {
    document.getElementById("znak").value = "-";
   }
   if(this.dataService.znak===2)
   {
    document.getElementById("znak").value = "+";
   }
}
ngOnInit(): void {
//  document.getElementById("clearSubmit").addEventListener('click', this.clearCalc.bind(this));
document.getElementById("genSubmit").addEventListener('click', this.generate.bind(this))
 document.getElementsByName("num").forEach((e: HTMLElement) => { e.addEventListener('click', this.numClick.bind(e))})
//  document.getElementById("addSubmit").addEventListener('click', this.addFun.bind(this));
  document.getElementById("enterSubmit").addEventListener('click', () => {
    
   document.getElementById("corNum").value = this.dataService.result;
  })
  
}
}
