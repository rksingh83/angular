import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { StudentComponent } from './components/student/student.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { CatchEventDirective } from './directive/catch-event.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentComponent,
    CatchEventDirective ,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
