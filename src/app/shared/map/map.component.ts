import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import {ThemeService} from "../../services/theme/theme.service";

@Component({
  selector: 'mina-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{
  @ViewChild('map') mapEl !:ElementRef
  token = "pk.eyJ1IjoiZWx2aW5tdXJzaHVkbHUiLCJhIjoiY2xua2xyMmV6MXZqajJrdzVsNHNyZ2I0NCJ9.Zdc_PFFpzqDzum8kHTu7uA"

  map !:mapboxgl.Map

  constructor(private theme:ThemeService) {
  }

  ngAfterViewInit() {

    // @ts-ignore
    mapboxgl.accessToken = this.token;



    this.theme.isDarkTheme$.subscribe(theme=>{

      if(this.map){
        this.map.remove()
      }

      this.map = new mapboxgl.Map({
        container: this.mapEl.nativeElement,
        style: `mapbox://styles/mapbox/${theme?'dark':'light'}-v11` ,

        center: [28.9784, 41.0082],
        zoom: 8.5
      });

      this.map.on('load', () => {
        this.map.addSource('route', {
          'type': 'geojson',
          'data': 'assets/istanbul-nufus-geo.geojson'
        });

        const colorStops = [
          [0, '#dede08'],
          [4000, '#deb308'],
          [10000, '#e0350a'],

        ];
        this.map.addLayer({
          'id': 'route',
          'type': 'fill',
          'source': 'route',
          paint: {
            'fill-color': {
              property: 'maas',
              stops: colorStops
            },
            'fill-opacity': 0.9
          }
        });
        this.map.addLayer({
          id: 'labels',
          type: 'symbol',
          source: 'route',
          layout: {
            'text-field': ['get', 'ILCEAD'],
            'text-size': 13,
            'text-anchor': 'center',
          },
          paint: {
            'text-color': 'white',
          }
        });

      });

    })

  }
}
