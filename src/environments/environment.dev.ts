import {domain, clientId } from "../assets/data/auth_config.json"

export const environment = {
  production: false,
  environment: "dev",
  apiBaseUrl: "https://producttracker-api.herokuapp.com",
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
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
