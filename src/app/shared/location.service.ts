import {Injectable} from '@angular/core';
import {GeoService} from './geo.service';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private firebaseService: FirebaseService, private geoService: GeoService) {}

  addNewLocationAsync(descr: string, coords: Array<number>) {
    const newLocationEntry = {
      description: descr,
      created: new Date().getTime(),
      creationDate: new Date().toString()
    };
    var newLocationKey = null;
    var newLocationEntryAdded = false;

    return new Promise((resolve, reject) => {
      this.firebaseService
        .addNewEntityAsync(newLocationEntry, 'locations', true)
        .then((newEntityKey) => {
          console.log('Update succeeded.');
          newLocationKey = newEntityKey;
          newLocationEntryAdded = true;
          this.geoService.addNewGeolocationAsync(newLocationKey, coords);
        })
        .then(() => {
          console.log('Set succeeded.');
          resolve(newLocationKey);
        })
        .catch((error) => {
          if (newLocationEntryAdded) {
            this.firebaseService.removeEntityAsync(newLocationKey, 'locations', true);
          }

          reject(error);
        });
    });
  }
}
