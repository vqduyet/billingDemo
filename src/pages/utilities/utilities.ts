import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Utilities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-utilities',
  templateUrl: 'utilities.html'
})
export class UtilitiesPage {

  isInFull: boolean = true;
  payAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onSubmit(){
  }

}
