import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraductorPagPrincComponent } from './modules/traductor-pag-princ/traductor-pag-princ.component';
import { EntrCorpusComponent } from './modules/entr-corpus/entr-corpus.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
