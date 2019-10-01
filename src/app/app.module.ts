import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServicesComponent } from './components/services/services.component';
import {FooterComponent} from './components/footer/footer.component'
import {routing} from './components/routing/app.routing'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, HomeComponent, AboutusComponent, ContactusComponent, 
    GalleryComponent, MenuComponent, ServicesComponent, FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, AngularFontAwesomeModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
