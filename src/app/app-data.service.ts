import { Inject, Injectable } from "@angular/core";
import { plainToClass } from "class-transformer";
import { map } from "rxjs/operators";

import { AppDataResource } from "./app-data.resource";
import { Contact } from "./pages/model/responseModel";

@Injectable({providedIn:'root'})
export class AppDataService {
  private page = 1;
  private isLoading = false;
  public search = "";
  public sorting = 'name';
  public ordering = 'ASC';

  constructor(private _dataSrc: AppDataResource) {
  }

  loadData() {
      let params = {
        _page: this.page.toString(),
        _sort: this.sorting,
        _order: this.ordering,
        q: this.search
      };

      return this._dataSrc.getAll()
      .pipe(map((res)=>{
return plainToClass(Contact, res,{excludeExtraneousValues:true});
      }));
  }

}
