import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutes } from './client-layout.routing';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from 'app/principal/principal.component';


@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientLayoutRoutes),
  ]
})
export class ClientLayoutModule { }
