import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {form_settings} from "../../../../constants/forms";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {settings} from "../../../../constants/settings";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";
import {AnswerService} from "../../../../services/add-answer/answer.service";


interface IAnswers{
  color:string,
  answer:string
}

@Component({
  selector: 'mina-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent   {
@ViewChild('answer') answerInput !:ElementRef<HTMLInputElement>
  datas:IAnswers[]  = []



  isSubmitted  = false

  form: FormGroup;

  constructor(private ansServ:AnswerService) {
    const group: any = {
      'color':new FormControl(),
    };

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
    this.answerInput.nativeElement.style.border = 'none'
    this.isSubmitted = true
    console.log(this.form)
  }


  addColor(){
    const color = this.form.get('color')?.value
    const answer = this.answerInput.nativeElement.value

    if(answer.trim() === '' || !color) {
      this.answerInput.nativeElement.style.border = '1px solid red'
      return
    }
    this.answerInput.nativeElement.style.border = 'none'

    this.ansServ.addAnswer({color,answer})

    const formValue = this.form.get('answers')?.value

    this.form.get('answers')?.setValue([{color,answer},...formValue])

    this.answerInput.nativeElement.value = ''
    this.form.get('color')?.setValue(null)


  }

  protected readonly form_settings = form_settings;
}
