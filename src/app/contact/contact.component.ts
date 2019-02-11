import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
declare var require: any;
import { Location } from '@angular/common';
import { ApiIntegrationService } from '../api-integration.service';


// import { InfoService } from '../info.service';
const config=require('./../../../ContactList.json');

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private ContactData:any=config;
  private tablevisible:boolean=true;
  private name:any;
  private firstname:any;
  private lastname:any;
  private number:any;
  public myform:any;
  public formdata:any;




  constructor(
    private data:ApiIntegrationService,
    private location: Location ){}
  ngOnInit() {
    console.log(this.ContactData);
    this.myform = {}

    // t
  }
  Send(text:any){
    console.log(text);
    this.tablevisible=false;
    this.firstname = this.ContactData[text].FirstName;
    this.lastname = this.ContactData[text].LastName;
    this.number = this.ContactData[text].UserNumber;
    console.log(this.firstname,this.number,this.lastname);
    localStorage.setItem('firstname',  this.firstname);
    localStorage.setItem('lastname',  this.lastname);
    localStorage.setItem('number',  this.number);

  }

  SubmitAPI(){
var firstname= localStorage.getItem('firstname');
var lastname= localStorage.getItem('lastname')
var number= localStorage.getItem('number')
var postData ={
  FirstName:firstname,
  LastName:lastname,
  UserNumber:number
}
this.data.sendOTP(postData).subscribe(
    data => {
      console.log("data",data);
     if(data['status'] ==200){
  alert("otp send successfully")
    }else{
      alert("otp not send successfully")
    }

  })

//     this.data.submitdata().subscribe(
// if(data['statusCode']==200){
//   alert("successfylly")
// };
// else{
// alert('unsuccessfully');
// }
  }
}
