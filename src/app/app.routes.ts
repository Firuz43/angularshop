import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path: 'notes', component: MainComponent},
    {path: 'navbar', component: NavbarComponent}
];
