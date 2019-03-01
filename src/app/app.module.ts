import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { QrCodeGeneratePage } from '../pages/qr-code-generate/qr-code-generate';
import { QrCodeReaderPage } from './../pages/qr-code-reader/qr-code-reader';
import { QrCodeHistoryPage } from './../pages/qr-code-history/qr-code-history';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrHistoryProvider } from '../providers/qr-history/qr-history';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QrCodeGeneratePage,
    QrCodeReaderPage,
    QrCodeHistoryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QrCodeGeneratePage,
    QrCodeReaderPage,
    QrCodeHistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    QrHistoryProvider
  ]
})
export class AppModule {}
