import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'new',
  webDir: 'www',
  "plugins": {
    "Geolocation": {
      "forceShow": true
    },
  server: {
    androidScheme: 'https'
  }
}
};

export default config;
