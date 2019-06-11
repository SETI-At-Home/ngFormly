import { UiModule } from './../../../../libs/shared/ui/src/lib/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPerfume, PerfumeModule } from 'perfume.js/angular';
import { PERFUME_CONFIG } from '../perfume';

import { AppComponent } from './app.component';
import { DefaultFormComponent } from './default-form/default-form.component';

@NgModule({
  declarations: [AppComponent, DefaultFormComponent],
  imports: [BrowserModule, UiModule, PerfumeModule.forRoot(PERFUME_CONFIG) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
