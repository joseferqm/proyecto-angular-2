import {Component, OnInit} from '@angular/core';
import {LocationService} from '../shared/location.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('test, get location');

    const coords = [-16.130262, 153.605347];

    this.locationService
      .addNewLocationAsync('una descripción', coords)
      .then((value) => {
        console.log(value);
        console.log('location added!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
