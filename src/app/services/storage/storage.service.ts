import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }
  // 设置storage
  setStorage(index:string,value:string){
    localStorage.setItem(index,value); 
  } 
  // 获取storage
  getStorage(){
    return localStorage;
  }
  // 移除storage
  removeStorage(){
    localStorage.clear();
  }
}
