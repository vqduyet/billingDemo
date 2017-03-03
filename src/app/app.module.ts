import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http } from '@angular/http';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { PaymentPage } from '../pages/payment/payment';
import { OtherServicesPage } from '../pages/other-services/other-services';
import { HistoryPage } from '../pages/history/history';
import { RentalPage } from '../pages/rental/rental';
import { UtilitiesPage } from '../pages/utilities/utilities';
import { ServicesMasterPage } from '../pages/services-master/services-master';
import { ServicesDetailPage } from '../pages/services-detail/services-detail';
import { SettingsPage } from '../pages/settings/settings';

import { Items } from '../providers/items';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    PaymentPage,
    OtherServicesPage,
    HistoryPage,
    RentalPage,
    UtilitiesPage,
    ServicesMasterPage,
    ServicesDetailPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    PaymentPage,
    OtherServicesPage,
    HistoryPage,
    RentalPage,
    UtilitiesPage,
    ServicesMasterPage,
    ServicesDetailPage,
    SettingsPage
  ],
  providers: [Items, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
