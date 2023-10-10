import {Component, OnInit} from '@angular/core';
import {form_settings} from "../../../../constants/forms";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {settings} from "../../../../constants/settings";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";

@Component({
  selector: 'mina-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent   {

  formGroup = new FormGroup({
    'card-title':new FormControl('',[Validators.required]),
    'card-desc':new FormControl('',[Validators.required]),
    'select1':new FormControl('',[Validators.required]),
    'select2':new FormControl('',[Validators.required]),
    'answers':new FormControl('',[Validators.required]),
  })

  isSubmitted  = false

  form: FormGroup;

  constructor() {
    const group: any = {};

    this.form_settings.fields.forEach(inputConfig => {
      group[inputConfig.field] = new FormControl(
        inputConfig.default,
        [Validators.required]
      );
    });

    this.form = new FormGroup(group);
  }


  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Option List',
    allSelected: 'All selected',
  };

  myOptions : IMultiSelectOption[] =[
    {"id":1,"name":"Option1"},
    {"id":2,"name":"Option2"},
    {"id":3,"name":"Option3"},
    {"id":4,"name":"Option4"}
  ]
  selectSettings : IMultiSelectSettings = {
    checkedStyle:'glyphicon',
    selectionLimit:1,
    autoUnselect:true,
    closeOnSelect:true,
    containerClasses:'select-container',
    buttonClasses:'select-button',


  }


  test(){
    this.isSubmitted = true
    console.log(this.form)
  }

  protected readonly form_settings = form_settings;
}
