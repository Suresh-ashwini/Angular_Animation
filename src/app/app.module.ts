import { ZippyComponent } from './zippy/zippy.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomersComponent } from './export/customers/customers.component';
// import { FileUploadComponent } from './blob-storage/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ZippyComponent,
    CustomersComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
