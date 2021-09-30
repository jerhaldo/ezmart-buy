import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ListarEmpleadosComponent } from 'app/crud-empleados/listar-empleados/listar-empleados.component';
import { AgregarEmpleadosComponent } from 'app/crud-empleados/agregar-empleados/agregar-empleados.component';
import localeESCL from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { MostrarComponent } from 'app/crud-pedidos/mostrar/mostrar.component';
import { InfoPedidosComponent } from 'app/crud-pedidos/info-pedidos/info-pedidos.component';
import { EditEstadoComponent } from 'app/crud-pedidos/edit-estado/edit-estado.component';
import { ListarComponent } from 'app/crud-productos/listar/listar.component';
import { AgregarComponent } from 'app/crud-productos/agregar/agregar.component';
import { EditarComponent } from 'app/crud-productos/editar/editar.component';

registerLocaleData(localeESCL, 'es-CL')

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ListarEmpleadosComponent,
    AgregarEmpleadosComponent,
    MostrarComponent,
    InfoPedidosComponent,
    EditEstadoComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ]
})

export class AdminLayoutModule {}
