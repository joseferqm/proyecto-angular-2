import {Component, OnInit} from '@angular/core';
import {GeoService} from '../shared/geo.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor(private geoService: GeoService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('test, get location');
  }
}
