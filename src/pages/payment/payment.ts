import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RentalPage } from '../rental/rental';
import { UtilitiesPage } from '../utilities/utilities';
import { ServicesMasterPage } from '../services-master/services-master';
import { SettingsPage } from '../settings/settings';

/*
  Generated class for the Payment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  items: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: 'Rental', component: RentalPage},
      {title: 'Utilities', component: UtilitiesPage},
      {title: 'Services', component: ServicesMasterPage},
      {title: 'Settings', component: SettingsPage}
    ];
  }

  openItem(item) {
    this.navCtrl.push(item.component);
  }

}
