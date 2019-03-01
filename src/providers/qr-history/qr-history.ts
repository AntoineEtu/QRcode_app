import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const STORAGE_KEY = 'qrHistory';
/*
  Generated class for the QrHistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrHistoryProvider {

  constructor(public storage: Storage) {
  }

  isSaved(str) {
    return this.getAllSavedDatas().then(result => {
      return result && result.indexOf(str) !== -1;
    });
  }
 
  saveQrCode(str) {
    return this.getAllSavedDatas().then(result => {
      if (result) {
        result.push(str);
        alert("QR Code enregistré");
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [str]);
      }
    });
  }
 
  unsaveQrCode(str) {
    return this.getAllSavedDatas().then(result => {
      if (result) {
        var index = result.indexOf(str);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  getAllSavedDatas() {
    return this.storage.get(STORAGE_KEY);
  }

}
