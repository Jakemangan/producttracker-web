// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {domain, clientId, audience } from "../assets/data/auth_config.json"

export const environment = {
  production: false,
  environment: "local",
  apiBaseUrl: "http://localhost:5050",
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience
  },
  firebaseConfig: {
    apiKey: "AIzaSyC-ddDg0CiHqluUSnO8DjwDyJd_VwmmwHg",
    authDomain: "producttracker-web-b3f3a.firebaseapp.com",
    projectId: "producttracker-web-b3f3a",
    storageBucket: "producttracker-web-b3f3a.appspot.com",
    messagingSenderId: "433282625087",
    appId: "1:433282625087:web:96cd1bf1900bb72baf528a",
    measurementId: "G-4BG1NZG99M"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
