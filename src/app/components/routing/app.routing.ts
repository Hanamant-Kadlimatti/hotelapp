import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { MenuComponent } from '../menu/menu.component';
import { ServicesComponent } from '../services/services.component';
import { ContactusComponent } from '../contactus/contactus.component';

const ROUTES : Routes =[
    {path: '', component: HomeComponent},
    {path: 'about', component:AboutusComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'services' , component: ServicesComponent},
    {path: 'contact', component: ContactusComponent}
]

export const routing = RouterModule.forRoot(ROUTES)