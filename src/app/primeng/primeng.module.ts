import {NgModule} from '@angular/core';
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ],
  imports: [

  ]
})
export class PrimengModule {
}
