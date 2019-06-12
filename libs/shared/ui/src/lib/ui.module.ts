import {UiService} from './ui.service'
/** dependencies */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TextMaskModule } from 'angular2-text-mask';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** wrappers */
import { PanelWrapperComponent } from './wrappers/panel-wrapper.component';
import { ErrorWrapperComponent } from './wrappers/error.component';

/** types */
import { RepeatSectionComponent } from './types/repeat-section.component';
import { FormlyFieldInputMoney } from './types/money.component';
import { FormlyFieldInputPercentage } from './types/percentage.component';

/** configuration */
import { config } from './config'

@NgModule({
  declarations: [PanelWrapperComponent,
    ErrorWrapperComponent,
    RepeatSectionComponent,
    FormlyFieldInputMoney,
    FormlyFieldInputPercentage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    TextMaskModule,
    FormlyMaterialModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [UiService]
})
export class UiModule {}
