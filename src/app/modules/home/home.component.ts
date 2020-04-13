import { Component, OnInit,ViewChild } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
let data =require('../../../assets/json/home.json');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('bg', { static: true }) bg;
  public introduction_list:object;
  public advantage_list:object;
  public contact_list:object;
  public code_list=document.getElementsByClassName('code-img');
  public gzh_list=document.getElementsByClassName('gzh');
  public slogen:string;
  public gotop:string;
  public btn:string[];
  public video_title:string;
  constructor(public storage:StorageService) {

  }
  ngAfterContentInit(): void {
    // 中英文文字设置
     if(this.storage.getStorage()['language']==='English') {
      this.slogen=data.english.slogen;
      this.btn=data.english.btn;
      this.video_title =data.english.video_title;
      this.introduction_list=data.english.introduction_list;
      this.advantage_list=data.english.advantage_list;
      this.contact_list=data.english.contact_list;
      this.gotop=data.english.gotop;
    }
     else {
      this.btn=data.chinese.btn;
      this.video_title=data.chinese.video_title;
      this.slogen=data.chinese.slogen;
      this.introduction_list=data.chinese.introduction_list;
      this.advantage_list=data.chinese.advantage_list;
      this.contact_list=data.chinese.contact_list;
      this.gotop=data.chinese.gotop;
     }
  }
  ngOnInit() {
    //  首页背景图片 星星闪烁效果代码部分
    function getScreen() {
      let width;
      let height;
      if(window.innerWidth) {
          width=window.innerWidth;
          height=window.innerHeight;

      } else if(document.compatMode==="BackCompat") {
          width=document.body.clientWidth;
          height=document.body.clientHeight;
      }
      else {
          width=document.documentElement.clientWidth;
          height=document.documentElement.clientHeight;
      }
      return {width,height};
    }
  let {width,height}=getScreen();
  for (let i=0;i<100;i++) {
      let oSpan=document.createElement("span");
      oSpan.className='star';
      let x=Math.random()*width;
      let y=Math.random()*height;
      oSpan.style.left=x+"px";
      oSpan.style.top=y+"px";
      oSpan.style.display='inline-block';
      oSpan.style.width='30px';
      oSpan.style.height='30px';
      oSpan.style.background='url("../../../assets/images/star.png") no-repeat';
      oSpan.style.backgroundSize='30px';
      oSpan.style.position='absolute';
      oSpan.style.animation='flash 1s alternate infinite';
      oSpan.style.transition='all 1s infinite';
      oSpan.addEventListener('mouseenter',function() {
        oSpan.style.transform='scale(2,2) rotate(180deg)';
        oSpan.style.transition='all 1s linear';
      });
      oSpan.addEventListener('mouseleave',function() {
        oSpan.style.transform='scale(1,1) rotate(180deg)';
        oSpan.style.transition='all 1s linear';
      });
      let scale=Math.random();
      oSpan.style.transform=`scale(${scale},${scale})`;
      let time=Math.random()*2;
      oSpan.style.animationDelay=time+"s";
      this.bg.nativeElement.appendChild(oSpan);
   }
  }
  // 联系我们部分的二维码显示函数
  showImg(index) {
    this.code_list[index]['style'].display='inline-block';
  }
  // 联系我们部分的二维码隐藏函数
  hideImg(index) {
    this.code_list[index]['style'].display='none';
  }
}
