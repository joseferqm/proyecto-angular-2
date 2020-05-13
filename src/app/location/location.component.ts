import {Component, OnInit} from '@angular/core';
import {LocationService} from '../shared/location.service';
import {NgForm} from '@angular/forms';
import {SpinnerService} from '../shared/spinner.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor(private locationService: LocationService, private spinnerService: SpinnerService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const descr = form.value.descr;
    const lon = form.value.lon;
    const lat = form.value.lat;
    const coords = [-16.130262, 153.605347];

    this.spinnerService.showMainSpinner();
    this.locationService
      .addNewLocationAsync(descr, coords)
      .then((value) => {
        console.log('location added!', value);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.spinnerService.hideMainSpinner();
      });
  }

  findLocation(form: NgForm) {
    console.log('find location');
  }
}
