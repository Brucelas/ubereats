import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {environment} from '../../environments/environment';

declare var google: any;
declare global {
  interface Window {
    mapInit: () => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {
  apiKey = environment.ApiKeyGoogleMaps;
  mapsLoaded = false;

  constructor(private rendererFactory: RendererFactory2) {}

  init(): Promise<any> {
    return new Promise((resolve) => {
      if (this.mapsLoaded) {
        console.log('google is preview loaded');
        resolve(true);
        return;
      }

      const renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window.mapInit = () => {
        this.mapsLoaded = true;
        if (google) {
          console.log('google is loaded');
        } else {
          console.log('google is not Defined');
        }
        resolve(true);
        return;
      };

      if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }

      renderer.appendChild(document.body, script);
    });
  }
}
