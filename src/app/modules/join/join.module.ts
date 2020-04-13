import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { JoinRoutingModule } from "./join-routing.module";
import { JoinComponent } from "./join.component";

@NgModule({
  declarations: [JoinComponent],
  imports: [
    CommonModule,
    JoinRoutingModule,
  ],
})
export class JoinModule { }
