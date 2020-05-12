import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {GeoFire} from 'geofire';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  private geoFire;

  constructor() {
    this.geoFire = new GeoFire(firebase.database().ref('locations'));
  }
}
