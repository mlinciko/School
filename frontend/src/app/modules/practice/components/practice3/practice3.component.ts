import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { IDxFormItems } from 'src/app/models/models';
import { PracticeService } from '../../services/practice.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.scss']
})
export class Practice3Component implements OnInit {
  loading: boolean = false;
  @ViewChild('form1') form1!: DxFormComponent;
  formItems1!: IDxFormItems;
  formData1 = {
    exp: 'z = ln(|x|) + tg(2x)'
  };
  result1: string[] = [];

  @ViewChild('form2') form2!: DxFormComponent;
  formItems2!: IDxFormItems;
  formData2 = {
    number: 0
  };
  result2!: number;

  @ViewChild('form3') form3!: DxFormComponent;
  formItems3!: IDxFormItems;
  formData3 = {
    number: 0
  };
  result3!: number;

  @ViewChild('form4') form4!: DxFormComponent;
  formItems4!: IDxFormItems;
  formData4 = {
    number: 0
  };
  result4!: boolean;

  @ViewChild('form5') form5!: DxFormComponent;
  formItems5!: IDxFormItems;
  formData5 = {
    text: 'Пеpвый отpицательный член последовательности cos(ctg(n))'
  };
  result5!: number;

  constructor(
    private practiceService: PracticeService,
  ) { }

  ngOnInit(): void {
    this.formItems1 = [
      {
        editorType: 'dxTextBox',
        dataField: 'exp',
        label: { text: 'Expression', visible: false },
        editorOptions: {
          labelMode: 'floating',
          disabled: true,
          value: 'z = ln(|x|) + tg(2x)',
        },
      },
    ]

    this.formItems2 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'number',
        label: { text: 'Number', visible: false },
        editorOptions: {
          labelMode: 'floating',
        },
      },
    ]

    this.formItems3 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'number',
        label: { text: 'Number', visible: false },
        editorOptions: {
          labelMode: 'floating',
        },
      },
    ]

    this.formItems4 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'number',
        label: { text: 'Number', visible: false },
        editorOptions: {
          labelMode: 'floating',
        },
      },
    ]

    this.formItems5 = [
      {
        editorType: 'dxTextArea',
        dataField: 'test',
        label: { text: 'Text', visible: false },
        editorOptions: {
          labelMode: 'floating',
          disabled: true,
          value: 'Пеpвый отpицательный член последовательности cos(ctg(n))',
        },
      },
    ]
  }

  submitForm1(): void {
    this.loading = true;
    this.practiceService.getTask18Result()
      .pipe(finalize(() => this.loading = false))
      .subscribe((res) => this.result1 = res)
  }

  submitForm2(): void {
    this.loading = true;
    this.practiceService.getTask21Result(this.formData2.number)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res) => this.result2 = res)
  }

  submitForm3(): void {
    this.loading = true;
    this.practiceService.getTask24Result(this.formData3.number)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res) => this.result3 = res)
  }

  submitForm4(): void {
    this.loading = true;
    this.practiceService.getTask27Result(this.formData4.number)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res) => this.result4 = res)
  }

  submitForm5(): void {
    this.loading = true;
    this.practiceService.getTask30Result()
      .pipe(finalize(() => this.loading = false))
      .subscribe((res) => this.result5 = res)
  }

}
