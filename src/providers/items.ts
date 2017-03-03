import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

import { Item } from '../models/item';

/*
  Generated class for the Items provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Items {

  items: Item[] = [];

  defaultItem: any = {
    "serviceName": "Laundry",
    "dateOfService": "01/03/2017",
    "staff": "Anh Hung",
    "amount": "10",
    "due": "20/03/2017"
  };

  constructor(public http: Http) {
    let items = [
      {
        "serviceName": "Laundry",
        "dateOfService": "01/03/2017",
        "staff": "Anh Hung",
        "amount": "10",
        "due": "21/03/2017"
       },
       {
         "serviceName": "House Cleaning",
         "dateOfService": "03/03/2017",
         "staff": "Co Tam",
         "amount": "15",
         "due": "23/03/2017"
       },
       {
         "serviceName": "Grass Cutting",
         "dateOfService": "02/03/2017",
         "staff": "Chu Tam",
         "amount": "5",
         "due": "22/03/2017"
       }
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

}
