import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormComponent } from './pages/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonIconComponent } from './component/button-icon/button-icon.component';
// import { EnvironmentsComponent } from './environments/environments.component';
import { MatSortModule } from '@angular/material/sort';
import { IdcardComponent } from './pages/idcard/idcard.component';
import {MatCardModule} from '@angular/material/card';
// import { NgModule } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
// import { NgxPrintModule } from 'ngx-print';
import html2canvas from 'html2canvas';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TodoComponent,
    PageNotFoundComponent,
    FormComponent,
    ButtonIconComponent,
    IdcardComponent,
    // EnvironmentsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    NgxPrintModule,
    
  ],
 
  
  bootstrap: [AppComponent]
})
export class AppModule { }
