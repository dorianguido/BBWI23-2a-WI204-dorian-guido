import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DeleteComponent } from './components/cv/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CVComponent,
    CreateUpdateComponent,
    ParentComponent,
    ChildComponent,
    DeleteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,   
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
