import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppDataService } from '../../app-data.service';
import {  formerBorrowerRequestModel } from '../model/requestModel';
import * as sharedEnums from '../../shared/enums';
import { formSubmitType } from '../../shared/enums';
import { plainToClass } from 'class-transformer';
import * as _ from 'underscore';
import { shared } from 'src/app/shared/globals';
import * as statics from 'src/app/shared/statics';

@Component({
  selector: 'app-former-borrower',
  templateUrl: './former-borrower.component.html',
  styleUrls: ['./former-borrower.component.scss']
})
export class FormerBorrowerComponent implements OnInit {
  constructor(private _dataSvc: AppDataService) {
    this.initVariables();
  }
  formData: any;
  formSubmitType!: sharedEnums.formSubmitType;
  dataModel!: shared.IDataModel;
  submitFormTitle!: string;
  dataSource!: shared.IDataTable;
  localDataSource: shared.IDataTable= {
    tableCaption: 'ROA Profit Results',
    rows:new MatTableDataSource<any>(),
    columns:[]
  };
  errMsg: string = '';

  ngOnInit(): void {
    this.initVariables();
  }
  initVariables() {
    this.submitFormTitle = 'Calculate';
    this.formData = {};
    this.formSubmitType = formSubmitType.NEW;
    this.dataModel = new formerBorrowerRequestModel().getDataModel();
  }

  submitForm(formValue: JSON) {
    this.reset();

    let model: any = plainToClass(formerBorrowerRequestModel, formValue);
    model = _.pick(model, (value, key, obj) => {
      return _.isNull(value) == false;
    });
    this._dataSvc.getRoaProfitForFb(model).subscribe(
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
    this.localDataSource.columns =[];
    this.localDataSource.rows = new MatTableDataSource<any>();
    this.dataSource=this.localDataSource;
  }

  generateTableSource(res: any) {
    let columns:shared.IDataModelColumn[] = statics.generateDataColumnFromModel(res[0],3);
    this.localDataSource.columns =columns;
    this.localDataSource.rows = new MatTableDataSource<any>(res);
    this.dataSource=this.localDataSource;
  }
}
