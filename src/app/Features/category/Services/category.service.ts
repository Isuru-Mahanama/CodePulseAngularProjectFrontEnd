import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-reques-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
    addCategory(model: AddCategoryRequest):Observable<void>{
      console.log("add cantegory");
      return this.http.post<void>('https://localhost:7061/api/Categories',model)
    }
  
}
