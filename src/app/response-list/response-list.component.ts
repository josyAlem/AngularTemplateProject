import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {DataService} from './data.service';
import {roaProfitInputModel} from './roaProfitInputModel';


@Component({selector: 'app-response-list', templateUrl: './response-list.component.html', styleUrls: ['./response-list.component.scss']})
export class ResponseListComponent implements OnInit {

    constructor(private _dataSvc : DataService) {}
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

            let model = new roaProfitInputModel(this.branchId.value);
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

