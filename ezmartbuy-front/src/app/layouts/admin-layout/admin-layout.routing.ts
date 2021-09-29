import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ListarComponent } from 'app/crud-productos/listar/listar.component';
import { AgregarComponent } from 'app/crud-productos/agregar/agregar.component';
import { EditarComponent } from 'app/crud-productos/editar/editar.component';
import { ListarEmpleadosComponent } from 'app/crud-empleados/listar-empleados/listar-empleados.component';
import { AgregarEmpleadosComponent } from 'app/crud-empleados/agregar-empleados/agregar-empleados.component';
import { MostrarComponent } from 'app/crud-pedidos/mostrar/mostrar.component';
import { InfoPedidosComponent } from 'app/crud-pedidos/info-pedidos/info-pedidos.component';
import { EditEstadoComponent } from 'app/crud-pedidos/edit-estado/edit-estado.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },//acá las rutas
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'productos',      component: ListarComponent },
    { path: 'productos/add',  component: AgregarComponent },
    { path: 'productos/edit/:id',  component: EditarComponent },
    { path: 'empleados',      component: ListarEmpleadosComponent },
    { path: 'empleados/add',      component: AgregarEmpleadosComponent },
    { path: 'pedidos',        component: MostrarComponent },
    { path: 'pedidos/:id',    component: InfoPedidosComponent },
    { path: '/edit/:id',      component: EditEstadoComponent }
];
