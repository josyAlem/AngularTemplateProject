import { Validators } from '@angular/forms';
import { IDataModel, IDataModelField } from 'studio-ui-tmpl';
export class sampleRequestModel {
  constructor(
    public name: string = "",
    public email?: string,
    public birthdate?: Date,
    public city?: string,
  ) { }

  getDataModel(): IDataModel {
    let fields: IDataModelField[] = [];
    Object.entries(this).forEach(([key, value]) => {
      let prop: string = key;
      fields.push({
        name: prop,
        dataType: prop == 'birthdate' ? 'date' : 'string',
        label: prop.replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (str) {
            return str.toUpperCase();
          }),
        controlType: 'input',
        formView: true,
        type: prop == 'birthdate' ? 'date' : 'string',
      });
    });
    return {
      fields: fields,
      columns: [],
      validators: [
        {
          name: 'name',
          validationRule: [
            Validators.required,
            Validators.minLength(2)
          ],
        },
      ],
    };
  }
}
