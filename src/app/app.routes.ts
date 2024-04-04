import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'notes', component: MainComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'login', component: LoginComponent}
];
