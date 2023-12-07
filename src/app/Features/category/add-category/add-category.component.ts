import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-reques-model';
import { CategoryService } from '../Services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {
 model:AddCategoryRequest;

 //making it as undefined- subscription
 private addCategorySubscription ?: Subscription;
 
 constructor(private categoryService : CategoryService){
  this.model = {
    name:'',
    urlHandle:''
  };
 }
  
  onFormSubmit(){
    this.addCategorySubscription = this.categoryService.addCategory(this.model)
    .subscribe({
      next:(respnse) =>{
          console.log("This was successful")
      },
      error:(error)=>{

      }
      
    })
  }
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
