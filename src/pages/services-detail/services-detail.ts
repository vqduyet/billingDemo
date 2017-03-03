import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/items';

/*
  Generated class for the ServicesDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-services-detail',
  templateUrl: 'services-detail.html'
})
export class ServicesDetailPage {
  item: any;
  isInFull: boolean = true;
  payAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  onSubmit(){    
  }

}
