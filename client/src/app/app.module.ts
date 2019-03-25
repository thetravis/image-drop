import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileDropComponentComponent } from './file-drop-component/file-drop-component.component';
import { ImageViewComponentComponent } from './image-view-component/image-view-component.component';
import { LogViewComponentComponent } from './log-view-component/log-view-component.component';

import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FileDropComponentComponent,
    ImageViewComponentComponent,
    LogViewComponentComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
