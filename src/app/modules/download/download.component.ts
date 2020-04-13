import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
let data=require("../../../assets/json/download.json");
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  public code_list:object[]=[];
  public head_title:string[];
  public content_title:object[];
  public introduction:string[];
  public btn:object[];
  public android:object={};
  constructor(public storage:StorageService) {
    // 判断
    // 1.安卓 则只显示安卓的下载详情
    // 2.IOS  则只显示苹果的下载详情
    // 3.电脑 同时显示安卓和苹果的下载详情
    const u = navigator.userAgent;
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    if(isAndroid&&!isiOS) {
      this.code_list.push(data.android);
    }
    else if(isiOS&&!isAndroid) {
      this.code_list.push(data.ios);
    } else {
      this.code_list.push(data.ios);
      this.code_list.push(data.android);
    }
  }
  ngAfterContentInit(): void {
    // 根据中英文显示不同的文字内容的设置
    if(this.storage.getStorage()['language']==='English') {
      this.head_title=data.english.head_title;
      this.content_title=data.english.content_title;
      this.introduction=data.english.introduction;
      this.btn=data.english.btn;
    } else {
      this.head_title=data.chinese.head_title;
      this.content_title=data.chinese.content_title;
      this.introduction=data.chinese.introduction;
      this.btn=data.chinese.btn;
    }
  }
  ngOnInit() {
  }

}
