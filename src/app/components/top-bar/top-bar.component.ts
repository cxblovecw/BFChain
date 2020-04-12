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
    this.language=this.storage.getStorage()['language'];
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
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let $this=this;
    window.onscroll=function(event){
      let scrollTop=document.documentElement.scrollTop
      console.log(scrollTop);
      if((scrollTop>$this.scrollTop&&scrollTop>=200)&&scrollTop>=60){
        $this.topbar.nativeElement['style'].opacity=0;
      }else{
        console.log('OKKOKOKO')
        $this.topbar.nativeElement['style'].opacity=1;
      }
      $this.scrollTop=document.documentElement.scrollTop;
    }
    let chinsesBtn=document.getElementsByClassName('chinese')[0];
    let englishBtn=document.getElementsByClassName('english')[0];

    chinsesBtn.addEventListener('click',function(){
      location.reload();
      if($this.language==='English'){
        $this.storage.setStorage('language','中文');
      }
    })
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
