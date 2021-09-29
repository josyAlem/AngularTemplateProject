import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppDataService } from '../../app-data.service';
import * as sharedEnums from '../../shared/enums';
import { formSubmitType } from '../../shared/enums';
import { plainToClass } from 'class-transformer';
import * as _ from 'underscore';
import { shared } from 'src/app/shared/globals';
import * as statics from 'src/app/shared/statics';
import { sampleRequestModel } from '../model/requestModel';
@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export class SamplePageComponent implements OnInit {
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
    columns:[]
  };
  errMsg: string = '';

  ngOnInit(): void {

    this.initVariables();
    this._dataSvc.loadData().subscribe((res)=>{
      this.generateTableSource(res);

     });
  }
  initVariables() {
    this.submitFormTitle = 'Get';
    this.formData = {};
    this.formSubmitType = formSubmitType.NEW;
    this.dataModel = new sampleRequestModel().getDataModel();
  }

  submitForm(formValue: JSON) {
    this.reset();

    let model: any = plainToClass(sampleRequestModel, formValue);
    model = _.pick(model, (value, key, obj) => {
      return _.isNull(value) == false;
    });
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
