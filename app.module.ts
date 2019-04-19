import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,// generic paths which must be placed lower for example path/path1/path2, path/path1 should be  placed

  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
