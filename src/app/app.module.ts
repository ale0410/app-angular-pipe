import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { TablaComponent } from './tabla/tabla.component';
import { FiltroPipe } from './filtro.pipe';
import { FormsModule } from '@angular/forms';
import { DiasPipe } from './dias.pipe';
import { DiasHastaPipe } from './dias-hasta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltroComponent,
    TablaComponent,
    FiltroPipe,
    DiasPipe,
    DiasHastaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
