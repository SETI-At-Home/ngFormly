import { Component, AfterViewInit } from '@angular/core';
import { UiService } from '../../../../../libs/shared/ui/src/lib/ui.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { PerfumeAfterViewInit } from 'perfume.js/angular';
import { perfume, TIMERS } from '../../perfume';

@Component({
  selector: 'bmw-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss']
})
export class DefaultFormComponent implements AfterViewInit {

  public form = new FormGroup({});
  public fields: FormlyFieldConfig[] = [
    ...this.uiService.getDefaultForm()
  ];
  public model = {}
  public firstInteraction = false;
  public startFilling = false;

  constructor(private uiService: UiService) { }

  ngAfterViewInit() {
    perfume.getInstance().start(TIMERS.get('FormlyComponentFI'));
  }

  public submit() {
    console.log(this.model);
    perfume.getInstance().end(TIMERS.get('FillForm'));
  }

  public switchForm(id) {
    this.model = {};
    this.fields = this.uiService.getFormById(id);
  }

  public interactionWithFormly() {
    if (!this.firstInteraction) {
      perfume.getInstance().end(TIMERS.get('FormlyComponentFI'));
      this.firstInteraction = true;
    }
  }

  public modelChange(e) {
    if (!this.startFilling) {
      perfume.getInstance().start(TIMERS.get('FillForm'));
      this.startFilling = true;
    }
  }

}
