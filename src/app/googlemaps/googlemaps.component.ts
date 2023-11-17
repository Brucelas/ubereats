import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, Inject } from '@angular/core';
import { GooglemapsService } from './googlemaps.service';
import { ModalController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'google-maps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss']
})
export class GooglemapsComponent implements OnInit {

  @Input() position = {
    lat: -2.898116,
    lng: -78.99958149999999
  };

  label = {
    titulo: 'Ubicación',
    subtitulo: 'Mi ubicación de envío'
  };

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;

  @ViewChild('map')
  divMap!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.init();
    console.log('position ->', this.position);
  }

  async init() {
    try {
      await this.googlemapsService.init();
      this.initMap();
    } catch (err) {
      console.log(err);
    }
  }

  initMap() {
    const position = this.position;

    const latLng = new google.maps.LatLng(position.lat, position.lng);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false,
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false,
    });

    this.map.addListener('click', (event: any) => {
      const clickedPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addMarker(clickedPosition);
    });

    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);
  }

  addMarker(position: any) {
    const latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker: any, titulo: string, subtitulo: string) {
    const contentString = `<div id="contentInsideMap">
      <div></div>
      <p style="font-weight: bold; margin-bottom: 5px;">${titulo}</p>
      <div id="bodyContent">
        <p class="normal m-0">${subtitulo}</p>
      </div>
    </div>`;
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  async mylocation() {
    console.log('mylocation() click');

    try {
      const res = await Geolocation['getCurrentPosition']();
      const position = {
        lat: res.coords.latitude,
        lng: res.coords.longitude,
      };
      this.addMarker(position);
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }

  aceptar() {
    console.log('click aceptar -> ', this.positionSet);
    this.modalController.dismiss({ pos: this.positionSet });
  }
}
