import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { IDxFormItems } from 'src/app/models/models';
import { Utils } from 'src/app/utils/ulits.class';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.scss']
})
export class Practice1Component implements OnInit {
  @ViewChild('form1') form1!: DxFormComponent;
  @ViewChild('form2') form2!: DxFormComponent;
  @ViewChild('form3') form3!: DxFormComponent;
  @ViewChild('form4') form4!: DxFormComponent;
  @ViewChild('form4') form5!: DxFormComponent;
  formItems1!: IDxFormItems;
  formItems2!: IDxFormItems;
  formItems3!: IDxFormItems;
  formItems4!: IDxFormItems;
  formItems5!: IDxFormItems;
  formData1 = {
    a1: 0,
    b1: 0,
    c1: 0,
    a2: 0,
    b2: 0,
    c2: 0,
  };
  formData2 = {
    x: 0,
    y: 0,
    z: 0,
  } 
  formData3 = {
    a: 0,
    b: 0,
  }
  formData4 = {
    x: 0,
    y: 0,
    z: 0,
  }
  formData5 = {
    a1: 0,
    b1: 0,
    a2: 0,
    b2: 0,
    r: 0,
  }; 
  result1!: { x: number, y: number } | null;
  result2!: number;
  result3!: string;
  result4!: number;
  result5!: string;

  ngOnInit(): void {
    this.formItems1 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'a1',
        label: { text: 'a1', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'b1',
        label: { text: 'b1', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'c1',
        label: { text: 'c1', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'a2',
        label: { text: 'a2', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'b2',
        label: { text: 'b2', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'c2',
        label: { text: 'c2', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
    ]

    this.formItems2 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'x',
        label: { text: 'x', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'y',
        label: { text: 'y', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'z',
        label: { text: 'z', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
    ]

    this.formItems3 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'a',
        label: { text: 'A', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'b',
        label: { text: 'B', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
    ]

    this.formItems4 = [
      {
        editorType: 'dxNumberBox',
        dataField: 'x',
        label: { text: 'x', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'y',
        label: { text: 'y', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'z',
        label: { text: 'z', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
    ]

    this.formItems5 = [
      {
        itemType: 'group',
        caption: "D",
        items: [
          {
            editorType: 'dxNumberBox',
            dataField: 'a1',
            label: { text: 'a1', visible: false },
            editorOptions: {
              labelMode: 'floating'
            },
            validationRules: [Utils.requiredRule()],
          },
          {
            editorType: 'dxNumberBox',
            dataField: 'b1',
            label: { text: 'b1', visible: false },
            editorOptions: {
              labelMode: 'floating'
            },
            validationRules: [Utils.requiredRule()],
          },
        ]
      },
      {
        itemType: 'group',
        caption: "C",
        items: [
          {
            editorType: 'dxNumberBox',
            dataField: 'a2',
            label: { text: 'a2', visible: false },
            editorOptions: {
              labelMode: 'floating'
            },
            validationRules: [Utils.requiredRule()],
          },
          {
            editorType: 'dxNumberBox',
            dataField: 'b2',
            label: { text: 'b2', visible: false },
            editorOptions: {
              labelMode: 'floating'
            },
            validationRules: [Utils.requiredRule()],
          },
        ]
      },
      {
        editorType: 'dxNumberBox',
        dataField: 'r',
        label: { text: 'R', visible: false },
        editorOptions: {
          labelMode: 'floating'
        },
        validationRules: [Utils.requiredRule()],
      },
    ]
  }

  submitForm1(): void {
    this.result1 = this.solveEquationSystem(this.formData1.a1, this.formData1.b1, this.formData1.c1, this.formData1.a2, this.formData1.b2, this.formData1.c2);
    this.form1.resetOptions();
  }

  submitForm2(): void {
    this.result2 = this.getMax(this.formData2.x, this.formData2.y, this.formData2.z);
    this.form2.resetOptions();
  }

  submitForm3(): void {
    this.result3 = this.getSquareOrMultiply(this.formData3.a, this.formData3.b)
    this.form3.resetOptions();
  }

  submitForm4(): void {
    this.result4 = this.getMaxWithModule(this.formData4.x, this.formData4.y, this.formData4.z);
    this.form4.resetOptions();
  }

  submitForm5(): void {
    this.result5 = this.arePointsInsideCircle(this.formData5.a1, this.formData5.b1, this.formData5.a2, this.formData5.b2, this.formData5.r)
    this.form5.resetOptions();
  }

  solveEquationSystem(a1: number, b1: number, c1: number, a2: number, b2: number, c2: number): { x: number, y: number } | null {
    const mainDeterminant = a1 * b2 - a2 * b1;

    if (mainDeterminant === 0) {
      notify({ message: "Главный определитель равен 0. Система уравнений не имеет решения.", type: "error", width: "auto"});
      return null;
    }

    const xDeterminant = c1 * b2 - c2 * b1;
    const yDeterminant = a1 * c2 - a2 * c1;

    const x = xDeterminant / mainDeterminant;
    const y = yDeterminant / mainDeterminant;

    return { x, y };
}

getMax(x: number, y:number, z: number): number {
  return Math.max(x, y, z);
}

getSquareOrMultiply(a: number, b: number): string {
  if ((a > 0 && b > 0) || (a <= 0 && b <= 0)) {
    return `${a**2}, ${b**2}`
  } else return `${a * b}`
}

getMaxWithModule(x: number, y:number, z: number): number {
  return Math.max(Math.abs(x), Math.abs(y), Math.abs(z));
}

arePointsInsideCircle(a1: number, b1: number, a2: number, b2: number, R: number): string {
  const distanceD = Math.sqrt(a1 * a1 + b1 * b1);
  const distanceC = Math.sqrt(a2 * a2 + b2 * b2);

  if (distanceD <= R && distanceC <= R) {
      return "Обе точки лежат внутри круга.";
  } else if (distanceD > R && distanceC <= R) {
      return "Точка D находится за пределами круга, но точка C лежит внутри круга.";
  } else if (distanceD <= R && distanceC > R) {
      return "Точка C находится за пределами круга, но точка D лежит внутри круга.";
  } else {
      return "Обе точки находятся за пределами круга.";
  }
}

}
