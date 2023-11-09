import { Component } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private geolocation:Geolocation) {
    this.getGeolocation();
  }

  getGeolocation(){
    
    this.geolocation.getCurrentPosition().then((resp)=>{
      console.log("resp",resp);
    }).catch((error)=>{
      console.log('error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data)=>{

    });
  }
}
