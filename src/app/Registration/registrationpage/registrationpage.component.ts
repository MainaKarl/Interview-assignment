import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.css'
})
export class RegistrationpageComponent implements OnInit {

  constructor(private builder:FormBuilder){}
  isLinear=false;

  ngOnInit():void{
    throw new Error('Method not implemented.');
  }

  selectedImage: string = '';

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  register=this.builder.group({
    type:this.builder.group({
      business:this.builder.control('',Validators.required)    
    }),
    verification:this.builder.group({
      phoneno:this.builder.control('',Validators.required),
      idno:this.builder.control('',Validators.required),
      firstname:this.builder.control('',Validators.required),      
    }),
    account:this.builder.group({
      email:this.builder.control('',Validators.required),
      password:this.builder.control('',Validators.required)
    }),
    confirm:this.builder.group({
      sms:this.builder.control('',Validators.required),
    })

  }); 

}
