import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './components/components/container/container.component';
import { LoginComponent } from './components/components/login/login.component';
import { MenuComponent } from './components/components/menu/menu.component';
import { ClaseUnoComponent } from './components/components/clase-uno/clase-uno.component';
import { MatCardModule } from '@angular/material/card';
import { Clase2Component } from './components/components/clase2/clase2.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    MenuComponent,
    ClaseUnoComponent,
    Clase2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
