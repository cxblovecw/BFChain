import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntroductionItemComponent } from './components/introduction-item/introduction-item.component';
import { AdvantageItemComponent } from './components/advantage-item/advantage-item.component';


@NgModule({
  declarations: [HomeComponent,IntroductionItemComponent, AdvantageItemComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent,IntroductionItemComponent]
})
export class HomeModule {

}
