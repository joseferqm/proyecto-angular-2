import {Component, OnInit} from '@angular/core';
import { GeoService } from '../shared/geo.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  constructor(private geoService: GeoService) {}

  ngOnInit(): void {}
}
