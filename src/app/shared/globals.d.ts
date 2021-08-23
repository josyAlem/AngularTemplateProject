
declare namespace shared {


  interface INavigationObject {
          id: string,
          title: string,
          route: string,
          icon: string,
          order: number,
          isDefaultPath: boolean
      }

       interface IDataModelField {
          name: string,
          label: string,
          controlType: string,
          dataType: string,
          type: string,
          formView:boolean,
          disabled?:boolean,
          width?:string
      }
      interface IDataModelColumn {
          field: string,
          header: string,
          isViewDetailLink?:boolean,
          styleClass?:string
      }
      interface IDataModelValidator {
          name: string,
          validationRule?: any[]
      }
      interface IDataModel {
          fields: IDataModelField[],
          columns: IDataModelColumn[],
          validators?:IDataModelValidator[]
      }


  }
