import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasRoutingModule } from './paginas-routing.module';
import { TraductorPagPrincComponent } from './traductor-pag-princ/traductor-pag-princ.component';
import { EntrCorpusComponent } from './entr-corpus/entr-corpus.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TraductorPagPrincComponent,
    EntrCorpusComponent
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PaginasModule { }
