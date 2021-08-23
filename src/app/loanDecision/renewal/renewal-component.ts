import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppDataService } from '../../app-data.service';
import { renewalRequestModel } from '../model/requestModel';
import * as sharedEnums from '../../shared/enums';
import { formSubmitType } from '../../shared/enums';
import { plainToClass } from 'class-transformer';
import * as _ from 'underscore';
import { isNull } from 'underscore';

@Component({
  selector: 'app-renewal',
  templateUrl: './renewal-component.html',
  styleUrls: ['./renewal-component.scss'],
})
export class RenewalComponent implements OnInit {
  constructor(private _dataSvc: AppDataService) {
    this.initVariables();
  }
  @ViewChild(MatTable) table!: MatTable<any>;

  formData: any;
  formSubmitType!: sharedEnums.formSubmitType;
  dataModel!: shared.IDataModel;
  submitFormTitle!: string;

  columns: any[] = [
    {
      columnDef: 'state',
      header: 'State',
      cell: (element: any) => `${element.state}`,
    },
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: any[] = [];
  errMsg: string = '';

  ngOnInit(): void {
    this.initVariables();
  }
  initVariables() {
    this.submitFormTitle = 'Calculate';
    this.formData = {};
    this.formSubmitType = formSubmitType.NEW;
    this.dataModel = new renewalRequestModel().getDataModel();
  }

  submitForm(formValue: JSON) {
    console.log('form recieved in renewal cpm');
    this.reset();

    let model: any = plainToClass(renewalRequestModel, formValue);
    model = _.pick(model, (value, key, obj) => {
      return _.isNull(value) == false;
    });
    this._dataSvc.getRoaProfit(model).subscribe(
      (res) => {
        this.generateTableSource(res);
      },
      (error) => {
        this.errMsg = this._dataSvc.parseError(error);
      }
    );
  }
  reset() {
    this.dataSource = new MatTableDataSource<any>();
    this.displayedColumns = [];
    this.columns = [];
    this.errMsg = '';
  }

  generateTableSource(res: any) {
    this.columns = [];
    let singleDataRow = res[0];
    for (const key in singleDataRow) {
      if (Object.prototype.hasOwnProperty.call(singleDataRow, key)) {
        this.columns.push({
          columnDef: key,
          header: key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
            return str.toUpperCase();
          }),
          cell: (element: any) => `${element[key]}`,
        });
      }
    }
    this.displayedColumns = this.columns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource<any>(res);
  }
}
