import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { StorageService } from '../../services/storage/storage.service';

let data=require("../../../assets/json/join.json");

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  public email:string='';
  public welcome:string='';
  public start_x:number;
  public end_x:number;
  public join_us='';
  public job:object=data.job;
  public job_list:object=[];
  public img_list:string[]=data.img_list;
  public photo_wall:any;
  public photo_box:any;
  public distance:number=0;
  public show_img:string='';
  public phone_introduction:object=[];
  constructor(public storage:StorageService) { 
    
  }
  ngAfterContentInit(): void {
    let $this=this;
    $this.photo_box=document.getElementsByClassName('photo-box1')[0];
    $this.photo_wall=document.getElementsByClassName('photo-box2')[0];
    if($this.check()){
      $this.photo_box.addEventListener('mousedown',function(event:any){
        $this.start_x=event['screenX'];
      })
      $this.photo_box.addEventListener('mouseup',function(event:any){
        $this.end_x=event['screenX'];
        let welcome:any=document.getElementsByClassName('welcome')[0];
        let move_distance=$this.start_x-$this.end_x;
        console.log(Math.abs(move_distance))
        
        if(move_distance>=25||(Math.abs(move_distance)<25&&event.clientX>document.body.clientWidth/2)){
          if($this.distance!==1600){
            $this.distance+=50;
            
          }else{
            welcome['style'].display='block';
            welcome['style'].opacity=0.6;
          }
        }else if(move_distance<=-25||(Math.abs(move_distance)<25&&event.clientX<=document.body.clientWidth/2)){
          if($this.distance!==0){
            $this.distance-=50;
            welcome['style'].display='none';
            welcome['style'].opacity=0; 
          }
        }
          $this.photo_wall['style'].transform =`translateX(${-$this.distance}px) translateZ(${$this.distance/6}px) translateY(${$this.distance/5}px)`;
      })
    }else{
      $this.photo_box.addEventListener('touchstart',function(event){
        $this.start_x=event['touches'][0].pageX;
        console.log(event)
      })
      $this.photo_box.addEventListener('touchend',function(event){
        console.log(event)
        $this.end_x=event['changedTouches'][0].pageX;
       
        let move_distance=$this.start_x-$this.end_x;
        if(move_distance>0){
          if($this.distance!==1300){
            $this.distance+=50;
          }
        }else if(move_distance<0){
          if($this.distance!==0){
            $this.distance-=50;
          }
        }else{
          console.log(event)
        }
          $this.photo_wall['style'].transform =`translateX(${-$this.distance}px) translateZ(${$this.distance/1.8}px) translateY(${$this.distance/5}px)`;
      })
    }
    if(this.storage.getStorage()['language']==="English"){
      this.email=data.english.email;
      this.join_us=data.english.join_us;
      this.job_list=data.english.job_list;
      this.welcome=data.english.welcome;
      this.phone_introduction=data.english.phone_introduction;
    }else{
      this.welcome=data.chinese.welcome;
      this.email=data.chinese.email;
      this.join_us=data.chinese.join_us;
      this.job_list=data.chinese.job_list;
      this.phone_introduction=data.chinese.phone_introduction;
    }
  }
  ngOnInit() {

  }
  check() { 
    var userAgentInfo=navigator.userAgent; 
    var Agents =new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"); 
    var flag=true; 
    for(var v=0;v<Agents.length;v++) { 
       if(userAgentInfo.indexOf(Agents[v])>0) { 
         flag=false; 
         break; 
       } 
     } 
     return flag; 
    }
  imgClick(index){
    this.show_img=this.img_list[index];
    let mask=document.getElementsByClassName('mask')[0];
    mask['style'].display='block';
  }
  close(){
    let mask=document.getElementsByClassName('mask')[0];
    mask['style'].display='none';
  }
  showDetail(index){
    this.job=this.job_list[index];
  }
}
