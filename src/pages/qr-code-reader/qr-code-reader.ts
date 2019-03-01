import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrCodeReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-reader',
  templateUrl: 'qr-code-reader.html',
})
export class QrCodeReaderPage {

  scanData : {};
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodeReaderPage');
  }

  scan(){
    this.options = {
        prompt : "Scan QRcode",
        showTorchButton : true
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        console.log(barcodeData);
        this.scanData = barcodeData;
        let textDecrypted = barcodeData.text;
        //this.qrHistoryProvider.saveQrCode(textDecrypted);
        this.openUrl(textDecrypted);
    }, (err) => {
        console.log("Error occured : " + err);
    });         
  }

  openUrl(url: string){
    let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    let res = regex.test(url);
    if(res){
      window.open(url,'_system', 'location=yes');
    }else{
      alert("Ce QR code n'est pas une URL");
    }
  }
}
