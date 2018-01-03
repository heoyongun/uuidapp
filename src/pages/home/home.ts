import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { Uid } from '@ionic-native/uid';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
                private uniqueDeviceID: UniqueDeviceID,
                private device: Device,
                private uid: Uid) {

  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => console.log(uuid))
      .catch((error: any) => console.log(error));
  }

  getUid() {
    console.log('Device Uid is: ' + this.uid.UUID);
  }

  getDevice() {
    console.log('Device UUID is: ' + this.device.uuid);
  }
}
