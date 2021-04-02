import {domain, clientId } from "../assets/data/auth_config.json"

export const environment = {
  production: false,
  environment: "dev",
  apiBaseUrl: "https://producttracker-api.herokuapp.com",
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};
