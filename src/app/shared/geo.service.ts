import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {GeoFire} from 'geofire';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private firebaseGeolocationsRef;
  private geoFire;

  constructor() {
    this.firebaseGeolocationsRef = firebase.database().ref('geolocations');
  }

  addNewGeolocationAsync(key: string, coords: Array<number>) {
    const firebaseUserId = firebase.auth().currentUser.uid;
    const firebaseNewGeolocationRef = this.firebaseGeolocationsRef.child(`${firebaseUserId}`);
    this.geoFire = new GeoFire(firebaseNewGeolocationRef);
    return this.geoFire.set(key, coords);
  }
}
