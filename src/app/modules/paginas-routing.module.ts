import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TraductorPagPrincComponent } from './traductor-pag-princ/traductor-pag-princ.component';
const routes:Routes = [
    {
        path:'Traductor',
        component:TraductorPagPrincComponent,
      },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PaginasRoutingModule{}