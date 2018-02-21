import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordsPage } from './records';
import { FactoryComponent } from './records'


@NgModule({
  declarations: [
    RecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordsPage),
  //  HttpModule,
  FactoryComponent
  ],
  entryComponents: [
    FactoryComponent
    ]
})
export class RecordsPageModule {}
