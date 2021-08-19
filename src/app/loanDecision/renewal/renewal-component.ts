import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {AppDataService} from '../../app-data.service';
import { renewalRequestModel } from '../model/requestModel';


@Component({selector: 'app-renewal',
 templateUrl: './renewal-component.html',
 styleUrls: ['./renewal-component.scss']})
export class RenewalComponent implements OnInit {

    constructor(private _dataSvc : AppDataService) {}
    @ViewChild(MatTable)table !: MatTable < any >;

    ngOnInit(): void {}

    columns : any[] = [{
            columnDef: 'state',
            header: 'State',
            cell: (element : any) => `${
                element.state
            }`
        }];
    dataSource : MatTableDataSource < any > = new MatTableDataSource<any>();
    displayedColumns : any[] = [];
    errMsg : string = "";

    branchId = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(4)]);

    reset() {
        this.errMsg = "";
        this.dataSource = new MatTableDataSource<any>();;
        this.displayedColumns = [];
        this.columns = [];

    }

    getErrorMessage() {
        if (this.branchId.hasError('required')) {
            return 'You must enter a value';
        }

        return this.branchId.valid ? '' : 'Not a valid branchId';;
    }
    getData() {
this.reset();
      if (!this.branchId.valid)
            return;

            let model = new renewalRequestModel(this.branchId.value);
        this._dataSvc.getRoaProfit(model).subscribe(res => {
            this.generateTableSource(res);
        }, (error) => {
            this.errMsg = error.toString();
        });

    }
    generateTableSource(res : any) {
        this.columns = [];
        let singleDataRow = res[0];
        for (const key in singleDataRow) {
            if (Object.prototype.hasOwnProperty.call(singleDataRow, key)) {
                this.columns.push({
                    columnDef: key,
                    header: key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
                        return str.toUpperCase();
                    }),
                    cell: (element : any) => `${
                        element[key]
                    }`

                });
            }
        }
        this.displayedColumns = this.columns.map(c => c.columnDef);
        this.dataSource = new MatTableDataSource<any>(res);
    }
}

