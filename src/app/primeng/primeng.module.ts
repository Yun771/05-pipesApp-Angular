import {NgModule} from '@angular/core';
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";


@NgModule({
  exports: [
    MenuModule,
    MenubarModule
  ],
  imports: [

  ]
})
export class PrimengModule {
}
