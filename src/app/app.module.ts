import { FileExplorerApiService } from './file-explorer-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [FileExplorerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
