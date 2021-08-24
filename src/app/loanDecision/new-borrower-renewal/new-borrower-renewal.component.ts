import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppDataService } from '../../app-data.service';
import { newBorrowerRenewalRequestModel } from '../model/requestModel';
import * as sharedEnums from '../../shared/enums';
import { formSubmitType } from '../../shared/enums';
import { plainToClass } from 'class-transformer';
import * as _ from 'underscore';
import { isNull } from 'underscore';
import { shared } from 'src/app/shared/globals';

@Component({
  selector: 'app-new-borrower-renewal',
  templateUrl: './new-borrower-renewal.component.html',
  styleUrls: ['./new-borrower-renewal.component.scss']
})
export class NewBorrowerRenewalComponent implements OnInit {
  constructor(private _dataSvc: AppDataService) {
    this.initVariables();
  }
  formData: any;
  formSubmitType!: sharedEnums.formSubmitType;
  dataModel!: shared.IDataModel;
  submitFormTitle!: string;
  dataSource!: shared.IDataTable;
  localDataSource: shared.IDataTable= {
    tableCaption: 'Results',
    rows:new MatTableDataSource<any>(),
    columns:[],
    selectableRows:false,
    sortBy: "",
    sortDirection: 'desc',
    paginator: false,
    pageSizeOptions: [5, 10, 20, 50, 100],
    pageSize: 10,
    totalRecords: 0,
  };
  errMsg: string = '';

  ngOnInit(): void {
    this.initVariables();
  }
  initVariables() {
    this.submitFormTitle = 'Calculate';
    this.formData = {};
    this.formSubmitType = formSubmitType.NEW;
    this.dataModel = new newBorrowerRenewalRequestModel().getDataModel();
  }

  submitForm(formValue: JSON) {
    this.reset();

    let model: any = plainToClass(newBorrowerRenewalRequestModel, formValue);
    model = _.pick(model, (value, key, obj) => {
      return _.isNull(value) == false;
    });
    this._dataSvc.getRoaProfitForNbRenewal(model).subscribe(
      (res) => {
        this.generateTableSource(res);
      },
      (error) => {
        this.errMsg = this._dataSvc.parseError(error);
      }
    );
  }
  reset() {
    this.errMsg = '';
  }

  generateTableSource(res: any) {
    let columns:shared.IDataModelColumn[] = [];
    let singleDataRow = res[0];
    for (const key in singleDataRow) {
      if (Object.prototype.hasOwnProperty.call(singleDataRow, key)) {
        columns.push({
          header: key.replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (str) {
            return str.toUpperCase();
          }).split(' ',3).join(' '),
          field:key
        });
      }
    }
    this.localDataSource.columns =columns;
    this.localDataSource.rows = new MatTableDataSource<any>(res);
    this.dataSource=this.localDataSource;
  }
}
