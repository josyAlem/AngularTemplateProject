import { FormControl, Validators } from '@angular/forms';
export class renewalRequestModel {
  constructor(
    public branchId: number = 0,
    public payment?: number,
    public term?: number,
    public v4Score?: number,
    public rvStlScore?: number,
    public LoanHistoryNumber?: number,
    public twn?: string,
    public tuFraudScore?: number,
    public ahPremium?: number,
    public lifePremium?: number,
    public personalPropertyPremium?: number,
    public iuiPremium?: number,
    public siAutoPremium?: number
  ) {}

  getDataModel(): shared.IDataModel {
    let fields: shared.IDataModelField[] = [];
    Object.entries(this).forEach(([key, value]) => {
      let prop: string = key;
      fields.push({
        name: prop,
        dataType: prop == 'branchId' || prop == 'twn' ? 'string' : 'number',
        label: prop.replace(/([A-Z])/g, ' $1')
              .replace(/^./, function (str) {
          return str.toUpperCase();
        }),
        controlType: 'input',
        formView: true,
        type: prop == 'twn' ? 'string' : 'number',
      });
    });
    return {
      fields: fields,
      columns: [],
      validators: [
        {
          name: 'branchId',
          validationRule: [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(4),
          ],
        },
      ],
    };
  }
}
