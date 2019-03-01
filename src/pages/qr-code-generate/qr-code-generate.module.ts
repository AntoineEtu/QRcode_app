import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodeGeneratePage } from './qr-code-generate';

@NgModule({
  declarations: [
    QrCodeGeneratePage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodeGeneratePage),
  ],
})
export class QrCodeGeneratePageModule {}
