import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdvantageItemComponent } from './components/advantage-item/advantage-item.component';
import { IntroductionItemComponent } from './components/introduction-item/introduction-item.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent,IntroductionItemComponent, AdvantageItemComponent],
  imports: [
    CommonModule,
  ],
  exports:[HomeComponent,IntroductionItemComponent],
})
export class HomeModule {

}
