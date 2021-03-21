import {domain, clientId } from "../assets/data/auth_config.json"

export const environment = {
  production: false,
  environment: "dev",
  apiBaseUrl: "http://localhost:5050",
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};
