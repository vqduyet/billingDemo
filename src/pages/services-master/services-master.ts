import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesDetailPage } from '../services-detail/services-detail';

import { Items } from '../../providers/items';
import { Item } from '../../models/item';

/*
  Generated class for the ServicesMaster page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-services-master',
  templateUrl: 'services-master.html'
})
export class ServicesMasterPage {

  currentItems: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.currentItems = this.items.query();
  }

  openDetails(item: Item){
    this.navCtrl.push(ServicesDetailPage, {
      item: item
    });
  }

}
