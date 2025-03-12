import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllDetailsComponent } from './pages/all-details/all-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Component } from '@angular/core';
import { ErrorComponent } from './pages/error/error.component';
import { SingleUserDetailsComponent } from './pages/single-user-details/single-user-details.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'details', component: AllDetailsComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path:'user-details/:id',component:SingleUserDetailsComponent
    },
    { path: '**', component: ErrorComponent }
];
