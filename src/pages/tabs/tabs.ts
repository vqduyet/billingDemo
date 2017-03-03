import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';
import { OtherServicesPage } from '../other-services/other-services';
import { HistoryPage } from '../history/history';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs: Array<{title: string, icon: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs = [
      { title: 'Home', icon: 'home', component: HomePage},
      { title: 'Payment', icon: 'cash', component: PaymentPage},
      { title: 'Other Services', icon: 'cart', component: OtherServicesPage},
      { title: 'History', icon: 'archive', component: HistoryPage}
    ];

  }



}
