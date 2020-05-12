import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {GeoService} from './geo.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private firebaseLocationsRef;

  constructor(private geoService: GeoService) {
    this.firebaseLocationsRef = firebase.database().ref('locations');
  }

  addNewLocationAsync(descr: string, coords: Array<number>) {
    const firebaseUserId = firebase.auth().currentUser.uid;
    const firebaseUserLocationsRef = this.firebaseLocationsRef.child(`${firebaseUserId}`);
    const newLocationKey = firebaseUserLocationsRef.push().key;
    const newLocationEntry = {
      description: descr,
      created: new Date().getTime(),
      creationDate: new Date().toString()
    };
    var newLocationEntryAdded = false;

    const updates = {};
    updates[`locations/${firebaseUserId}/${newLocationKey}`] = newLocationEntry;

    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref()
        .update(updates)
        .then(() => {
          console.log('Update succeeded.');
          newLocationEntryAdded = true;
          this.geoService.addNewGeolocationAsync(newLocationKey, coords);
        })
        .then(() => {
          console.log('Set succeeded.');
          resolve(newLocationKey);
        })
        .catch((error) => {
          if (newLocationEntryAdded) {
            this.removeLocationAsync(newLocationKey);
          }

          reject(error);
        });
    });
  }

  removeLocationAsync(locationKey: string) {
    const firebaseUserId = firebase.auth().currentUser.uid;
    const firebaseUserLocationRef = this.firebaseLocationsRef.child(`${firebaseUserId}/${locationKey}`);
    firebaseUserLocationRef
      .remove()
      .then(() => {
        console.log('Remove succeeded.');
      })
      .catch((error) => {
        console.log('Remove failed: ' + error.message);
        // Hay que agregar la llave de la location que no se pudo eliminar
        // dentro de un archivo especial para mandar a eliminar después
      });
  }
}
