import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationService} from '../shared/location.service';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SpinnerService} from '../shared/spinner.service';
import {MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationForm: FormGroup;

  private miniDisplay?: google.maps.LatLngLiteral;

  center = {lat: 10, lng: -84};
  zoom = 8;
  markerOptions = {draggable: true};
  markerPosition: google.maps.LatLngLiteral;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      lat: new FormControl(''),
      lon: new FormControl(''),
      descr: new FormControl('')
    });
  }

  onSubmit() {
    const latString = this.locationForm.get('lat').value;
    const longString = this.locationForm.get('lon').value;
    const descr = this.locationForm.get('descr').value;

    const parsedCoords = this.parseCoords(latString, longString);

    if (parsedCoords.valid) {
      const coords = [parsedCoords.lat, parsedCoords.lon];
      this.spinnerService.showMainSpinner();
      this.locationService
        .addNewLocationAsync(descr, coords)
        .then((value) => {
          console.log('location added!', value);
          this.locationForm.reset();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.spinnerService.hideMainSpinner();
        });
    }
  }

  parseCoords(latString: string, lonString: string) {
    const result = {
      lat: Number.parseFloat(latString),
      lon: Number.parseFloat(lonString),
      valid: null
    };
    result.valid = !Number.isNaN(result.lat) && !Number.isNaN(result.lon);
    return result;
  }

  findLocation() {
    const latString = this.locationForm.get('lat').value;
    const longString = this.locationForm.get('lon').value;

    const parsedCoords = this.parseCoords(latString, longString);

    if (parsedCoords.valid) {
      const coords = [parsedCoords.lat, parsedCoords.lon];
      console.log('latitude', coords[0]);
      console.log('longitude', coords[1]);
      this.updateMarker();
    }
  }

  moveOverMap(event: google.maps.MouseEvent) {
    this.miniDisplay = event.latLng.toJSON();
  }

  getMiniDisplay() {
    return this.miniDisplay
      ? {lat: this.miniDisplay.lat.toFixed(4), lon: this.miniDisplay.lng.toFixed(4)}
      : {lat: 0.0, lon: 0.0};
  }

  clickOverMap(event: google.maps.MouseEvent) {
    this.markerPosition = event.latLng.toJSON();
    this.updateFormCoordinates();
  }

  markerDragged(marker: MapMarker) {
    this.markerPosition = marker.getPosition().toJSON();
    this.updateFormCoordinates();
  }

  updateFormCoordinates() {
    this.locationForm.get('lat').setValue(this.markerPosition.lat.toFixed(4));
    this.locationForm.get('lon').setValue(this.markerPosition.lng.toFixed(4));
  }

  updateMarker() {}
}
