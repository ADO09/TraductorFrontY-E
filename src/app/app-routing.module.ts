import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'TA',
    pathMatch: 'full'
  },
  {
    path: 'TA',
    loadChildren: () =>
      import('./modules/paginas.module').then((m)=>m.PaginasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
