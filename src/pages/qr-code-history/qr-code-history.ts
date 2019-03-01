import { QrHistoryProvider } from './../../providers/qr-history/qr-history';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrCodeHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-history',
  templateUrl: 'qr-code-history.html',
})
export class QrCodeHistoryPage {

  strings: Array<string>
  noHistory: boolean
  qrList: Array<{text: string, date: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams, private historyProvider: QrHistoryProvider) {
  }

  ionViewDidLoad() {
    this.noHistory = false;
    this.getHistoryInList();
  }

  handleExceptions(res: any){
    if(res==null){
      this.noHistory = true;
    }
  }

  removeExceptions(){
    this.noHistory = false;
  }

  getHistoryInList(){
    this.removeExceptions();
    this.strings = new Array<string>();
    this.historyProvider.getAllSavedDatas().then(
      res => { this.strings = res; this.handleExceptions(res); this.manageDatas();}
    );
  }

  manageDatas(){
    this.qrList = new Array<{text: string, date: string}>();
    this.strings.forEach(string => {
      this.qrList.push({text : string.split(';')[0], date: string.split(';')[1]});
    });
  }
}
