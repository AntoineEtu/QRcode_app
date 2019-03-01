import { QrHistoryProvider } from './../../providers/qr-history/qr-history';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the QrCodeGeneratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-generate',
  templateUrl: 'qr-code-generate.html',
})
export class QrCodeGeneratePage {

  encodeData : string;
  encodedData : {} ;
  urlImage : string;
  scanData : {};
  options :BarcodeScannerOptions;
  myLastDateTime : string

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private qrHistoryProvider: QrHistoryProvider) {
    this.urlImage = "rien";
  }

  ionViewDidLoad() {
  }

  encodeText(){
    let tempTime: Date = new Date();
    this.myLastDateTime = new Date(tempTime.getTimezoneOffset()*60000).toISOString();
    this.qrHistoryProvider.saveQrCode(this.encodeData + ";" + tempTime.toISOString()/*this.myLastDateTime*/);
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
        this.encodedData = encodedData;
    }, (err) => {
        console.log("erreur apparue : " + err);
    });                 
  }

  scan(){
    this.options = {
        prompt : "Scan your barcode"
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        this.scanData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });         
  }

}