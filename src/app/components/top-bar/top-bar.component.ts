import { Component, OnInit,ViewChild } from '@angular/core';import { StorageService } from '../../services/storage/storage.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @ViewChild('topbar',{static:true}) topbar:any;
  public position:string='fixed';
  public pathname:string;
  public scrollTop:number;
  public language:string;
  public opt:object;
  constructor(public storage:StorageService) {
    this.language=storage.getStorage()['language'];
    this.pathname=window.location.pathname;
    this.scrollTop=document.documentElement.scrollTop;

  }
  ngAfterContentChecked(): void {
    // 在storage中设置language 用于识别当前是中文还是英文
    this.language=this.storage.getStorage()['language'];
    // 中英文导航栏文字设置
    if(this.language==='English'){
      this.opt=[
        {title:'Home',path:'/home'},
        {title:'Download',path:'/download'},
        {title:'Join us',path:'/join'},
      ]
      this.storage.setStorage('language','English')
    }else{
      this.opt=[
        {title:'首页',path:'/home'},
        {title:'下载',path:'/download'},
        {title:'加入我们',path:'/join'},
      ]
      this.storage.setStorage('language','中文')
    }
  }
  ngAfterViewInit(): void {
    // 固定顶部导航栏
    let $this=this;
    window.onscroll=function(event){
      let scrollTop=document.documentElement.scrollTop
      console.log(scrollTop);
      if((scrollTop>$this.scrollTop&&scrollTop>=200)&&scrollTop>=60){
        $this.topbar.nativeElement['style'].opacity=0;
      }else{
        $this.topbar.nativeElement['style'].opacity=1;
      }
      $this.scrollTop=document.documentElement.scrollTop;
    }
    let chinsesBtn=document.getElementsByClassName('chinese')[0];
    let englishBtn=document.getElementsByClassName('english')[0];
    // 中文按钮点击 如果是英文 则切换 如果不是 则不改变
    chinsesBtn.addEventListener('click',function(){
      location.reload();
      if($this.language==='English'){
        $this.storage.setStorage('language','中文');
      }
    })
    // 英文按钮点击 中文则切换 原是英文 则不改
    englishBtn.addEventListener('click',function(){
      location.reload();
      console.log($this.language)
      if($this.language==='中文'){
        $this.storage.setStorage('language','English');
      }
    })
  }
  ngOnInit() {
    
  }

}
