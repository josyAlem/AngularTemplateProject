import { Inject, Injectable } from "@angular/core";

import { AppDataResource } from "./app-data.resource";

@Injectable({providedIn:'root'})
export class AppDataService {
  private page = 1;
  private hasMore = true;
  private isLoading = false;
  private persons = [];
  public search = "";
  public sorting = 'name';
  public ordering = 'ASC';

  constructor(private contact: AppDataResource) {
   // this.loadContacts();
  }

  // getPerson(email:string) {
  //   console.log(email);
  //   for (let person of this.persons) {
  //     if (person.email === email) {
  //       return person;
  //     }
  //   }
  // }


  loadContacts() {
      let params = {
        _page: this.page.toString(),
        _sort: this.sorting,
        _order: this.ordering,
        q: this.search
      };

      return this.contact.query(params);
  }

  updateContact(person:JSON) {
   return this.contact.update(person);
  }

  removeContact(person:JSON) {
    return this.contact.remove(person);

  }

  createContact(person:JSON) {
    this.contact.save(person);
  }

  loadMore() {
    if (this.hasMore && !this.isLoading) {
      this.page += 1;
      this.loadContacts();
    }
  }
}
