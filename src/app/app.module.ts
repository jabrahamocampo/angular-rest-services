import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { ListComponent } from './Customer/list/list.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './Customer/add/add.component';
import { DetailComponent } from './Customer/detail/detail.component';
import { EditComponent } from './Customer/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    ListComponent,
    AddComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
