import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'underscore';
import { MatSort, MatSortable, MAT_SORT_DEFAULT_OPTIONS, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { shared } from '../globals';

@Component({
  selector: 'tmpl-grid',
  templateUrl: './tmpl-grid.html',
  styleUrls: ['./tmpl-grid.scss'],
  animations: [
    trigger('detailExpandTrigger', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TmplDataGridComponent implements OnChanges, OnInit {
  @Output() onRowSelected: EventEmitter<any> = new EventEmitter();
  @Output() onRowUnselected: EventEmitter<any> = new EventEmitter();
  @Output() onFieldClicked: EventEmitter<any> = new EventEmitter();
  selectedRowData!: SelectionModel<any>;
  showSearchRow: boolean = false;
  localDataTable: shared.IDataTable= {
    tableCaption: 'Sample Data Table',
    rows: new MatTableDataSource<any>(),
    columns: [],
    selectableRows: true,
    expandContent: '',
    sortBy: "",
    sortDirection: 'desc',
    contextMenu: [          ],
    paginator: true,
    pageSizeOptions: [5, 10, 20, 50, 100],
    pageSize: 10,
    totalRecords: 0
  };
  @Input() inputDataSource: shared.IDataTable=this.localDataTable;

  expandedElement!:  null;
  isLoadingResults: boolean = false;
  tableColHeaders!: string[];
  showPaginator: boolean = false;

  @ViewChild(MatSort, {static: false}) sort: MatSort=new MatSort();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor() {}
  ngOnInit(): void {
    console.log('datatable component init.');
    //this.localDataTable.rows.sort=this.sort;
  }
  ngOnChanges() {
    this.initDataTable();
  }

  initDataTable() {
    this.selectedRowData = new SelectionModel<any>(true, []);

    if (this.inputDataSource) {

      let modifiedColHeaders: shared.IDataModelColumn[]=
      _.map(this.inputDataSource.columns, function (c) {
        return c;
      });
      if (this.inputDataSource.expandContent != null) {
        if (
          !_.findWhere(modifiedColHeaders, {
            header: 'expand',
            field: 'expand',
          })
        )
          modifiedColHeaders.unshift({ header: 'expand', field: 'expand' });
      }

      if (this.inputDataSource.selectableRows == true) {
        if (
          !_.findWhere(modifiedColHeaders, {
            header: 'select',
            field: 'select',
          })
        )
          modifiedColHeaders.unshift({ header: 'select', field: 'select' });
      }

      if (this.inputDataSource.contextMenu != null) {
        if (
          !_.findWhere(modifiedColHeaders, {
            header: 'ctxMenu',
            field: 'ctxMenu',
          })
        )
          modifiedColHeaders.push({ header: 'ctxMenu', field: 'ctxMenu' });
      }

      this.tableColHeaders = _.pluck(modifiedColHeaders, 'header');

      this.showPaginator=this.inputDataSource.paginator;

      this.localDataTable = this.inputDataSource;

         this.localDataTable.rows.sort = this.sort;
      this.localDataTable.rows.paginator = this.paginator;

      if (this.localDataTable.pageSizeOptions == null)
        this.localDataTable.pageSizeOptions = [
          5, 10, 20, 50, 100, 500, 1000, 10000,
        ];
      if (this.localDataTable.totalRecords == null)
        this.localDataTable.totalRecords = this.localDataTable.rows.data.length;
      if (this.localDataTable.pageSize == null)
        this.localDataTable.pageSize = 5;
      if (this.localDataTable.sortBy == null)
        this.localDataTable.sortBy = this.localDataTable.columns[0].header;
      if (this.localDataTable.sortDirection == null)
        this.localDataTable.sortDirection = 'asc';
    }
   }

// sortData(event:Sort ){

//   //this.sort.sort(({id:event.active, start:event.direction}) as MatSortable);
//  this.localDataTable.rows.sort = this.sort;

// }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.localDataTable.rows.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectedRowData.selected.length;
    const numRows = this.localDataTable.rows.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selectedRowData.clear()
      : this.localDataTable.rows.data.forEach((row) =>
          this.selectedRowData.select(row)
        );
  }
  onAllCheckboxChanged(event: any) {
    if (event) this.masterToggle();
  }

  onRowCheckboxClicked(event: any) {
    event.stopPropagation();
  }
  onChangeRowSelection(event: any, rowData: any) {
    if (event) {
      this.selectedRowData.toggle(rowData);
      if (this.selectedRowData.selected) {
        this.onRowSelected.emit(rowData);
        console.log('selected row: ' + JSON.stringify(rowData));
      } else {
        this.onRowUnselected.emit(rowData);
        console.log('unselected row: ' + JSON.stringify(rowData));
      }
    }
  }
  onPageChanged(event: any) {}
  onViewDetail(field: string, rowData: any) {
    this.onFieldClicked.emit({ field: field, rowData: rowData });
    console.log(
      'selected field: ' + field + ' rowData: ' + JSON.stringify(rowData)
    );
  }
  onViewExpandedContent(rowData: any) {
    this.expandedElement = this.expandedElement === rowData ? null : rowData;
  }
}


