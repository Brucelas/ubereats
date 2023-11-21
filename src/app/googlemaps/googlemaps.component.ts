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
    lat: -33.4489,
    lng: -70.6693
  };
  

  label = {
    titulo: 'Ubicación',
    subtitulo: 'Mi ubicación de envío'
  }

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any

  @ViewChild('map', { static: false }) divMap: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController) {
    this.divMap = {} as ElementRef;
  }
  ngOnInit(): void {
    this.init();
    console.log('position ->', this.position);
  }

  async init() {
  try {
    await this.googlemapsService.init(this.renderer, this.document);

    await this.mylocation(); 
    this.initMap(); 
  } catch (error) {
    console.log(error);
  }
}




  initMap() {
    const position = this.position;
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
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

    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position);
    this.setInfoWindow(this.marker, this.label.titulo, this.label.subtitulo);

  }

  clickHandleEvent() {

    this.map.addListener('click', (event: any) => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addMarker(position);
    });

  }



  addMarker(position: any): void {
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(latLng);
    this.positionSet = position;
  }


  setInfoWindow(marker: any, titulo: string, subtitulo: string) {

    const contentString = '<div id="contentInsideMap">' +
      '<div>' +
      '</div>' +
      '<p style="font-weight: bold; margin-bottom: 5px;">' + titulo + '</p>' +
      '<div id="bodyContent">' +
      '<p class="normal m-0">' + subtitulo + '</p>' +
      '</div>' +
      '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);

  }

  async mylocation() {
    console.log('mylocation() click');

    Geolocation.getCurrentPosition().then(
      (res) => {
        console.log('mylocation() -> get ', res);

        const position = {
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        };

        this.position = position;  
        this.addMarker(position);  
        this.initMap();
      },
      (error) => {
        console.error('Error getting location', error);
      }
    );
  }


  aceptar() {
    console.log('click aceptar -> ', this.positionSet);
    this.modalController.dismiss({ pos: this.positionSet });
  }

}