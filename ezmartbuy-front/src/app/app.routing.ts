import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

const routes: Routes =[
  //Admin Routes
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)},
    ]
  }, 
  //Client Routes
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
    {
      path: '',
      redirectTo: 'client',
      pathMatch: 'full',
    },
    {
      path: '',
      loadChildren: () => import('./layouts/client-layout/client-layout.module').then(m => m.ClientLayoutModule)},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
