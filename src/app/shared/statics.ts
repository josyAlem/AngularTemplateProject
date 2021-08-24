'use strict';

import { shared } from "./globals";

export var PageOptions = {
    filter: {
        predicate: '',
        value: []
    },
    page: {
        pageSize: 1,
        pageNumber: 1
    },
    sort: {
        property: 'id',
        order: 'ascending'
    },
    totalCount: 0
};
export var  FormCtrlType ={
    INPUT:'input',
    CHECKBOX:'checkbox',
    TEXTAREA:'textarea',
    DATEPICKER:'datepicker',
    SELECT:'select',
    LOCATION:'location'
};
export var  RegExValidators ={
ALPHA_SPACE:"[a-zA-Z ]*",
ALPHA_NUM_SPACE:"[a-zA-Z0-9 ]*",
ALPHA_NUM:"[a-zA-Z0-9]*",
ALPHA:"[a-zA-Z]*",

}

export function generateDataColumnFromModel(dataModel:any,splitNameCount:number){
  let columns:shared.IDataModelColumn[] = [];
  for (const key in dataModel) {
    columns.push({
      header: key.replace(/([A-Z])/g, ' $1')
      .replace(/^./, function (str) {
        return str.toUpperCase();
      }).split(' ',splitNameCount).join(' '),
      field:key
    });
      }
          return columns;

}


