import {Component, OnInit} from '@angular/core';
import {form_settings} from "../../../../constants/forms";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {settings} from "../../../../constants/settings";

@Component({
  selector: 'mina-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  formGroup = new FormGroup({
    'card-title':new FormControl('',[Validators.required]),
    'card-desc':new FormControl('',[Validators.required]),
    'select1':new FormControl('',[Validators.required]),
    'select2':new FormControl('',[Validators.required]),
    'answers':new FormControl('',[Validators.required]),
  })

  form :FormGroup ;

  constructor() {
    const group: any = {};

    this.form_settings.fields.forEach(inputConfig => {
      group[inputConfig.field] = new FormControl(
        '',
        [Validators.required]
      );
    });

    this.form = new FormGroup(group);
  }



  protected readonly form_settings = form_settings;
  protected readonly settings = settings;
}
