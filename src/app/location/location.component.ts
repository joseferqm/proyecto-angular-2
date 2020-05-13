import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationService} from '../shared/location.service';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../shared/spinner.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  private display?: google.maps.LatLngLiteral;

  constructor(private locationService: LocationService, private spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const descr = form.value.descr;
    const parsedCoords = this.parseCoords(form.value.lat, form.value.lon);

    if (parsedCoords.valid) {
      const coords = [parsedCoords.lat, parsedCoords.lon];
      this.spinnerService.showMainSpinner();
      this.locationService
        .addNewLocationAsync(descr, coords)
        .then((value) => {
          console.log('location added!', value);
          form.reset();
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

  findLocation(form: NgForm) {
    console.log('find location');

    const parsedCoords = this.parseCoords(form.value.lat, form.value.lon);

    if (parsedCoords.valid) {
      const coords = [parsedCoords.lat, parsedCoords.lon];
      console.log('latitude', coords[0]);
      console.log('longitude', coords[1]);
    }
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  getDisplay() {
    return this.display
      ? {lat: this.display.lat.toFixed(4), lon: this.display.lng.toFixed(4)}
      : {lat: 0.0, lon: 0.0};
  }
}
