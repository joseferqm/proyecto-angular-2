import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-google-map-demo',
  templateUrl: './google-map-demo.component.html',
  styleUrls: ['./google-map-demo.component.css']
})
export class GoogleMapDemoComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

  center = {lat: 10, lng: -80};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  display?: google.maps.LatLngLiteral;

  constructor() {}

  ngOnInit(): void {}

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }
}
