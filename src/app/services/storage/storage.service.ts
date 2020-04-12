import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }
  setStorage(index:string,value:string){
    localStorage.setItem(index,value); 
  } 
  getStorage(){
    return localStorage;
  }
  removeStorage(){
    localStorage.clear();
  }
}
