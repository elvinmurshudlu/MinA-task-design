import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';




@Component({
  selector: 'mina-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{

  @ViewChild('map') mapEl !:ElementRef

  token = "pk.eyJ1IjoiZWx2aW5tdXJzaHVkbHUiLCJhIjoiY2xua2xyMmV6MXZqajJrdzVsNHNyZ2I0NCJ9.Zdc_PFFpzqDzum8kHTu7uA"


  ngAfterViewInit() {



    // @ts-ignore
    mapboxgl.accessToken = this.token;
    var map = new mapboxgl.Map({
      container: this.mapEl.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
    });


    map.on('load', () => {
      map.addSource('route', {
        'type': 'geojson',
        'data': 'assets/istanbul-nufus-geo.geojson'
      });
      map.addLayer({
        'id': 'route',
        'type': 'fill',
        'source': 'route',
        'paint': {
          'fill-color': '#FF0000', // Fill color (adjust as needed)
          'fill-opacity': 0.5      // Fill opacity (adjust as needed)
        },
      });
    });

  }

}
