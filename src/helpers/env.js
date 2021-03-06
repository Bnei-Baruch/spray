export const isProduction = process.env.NODE_ENV === 'production';

// Base url of this application
export const BASE_URL = process.env.REACT_APP_BASE_URL ||
  `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;

// Base name for history (path of BASE_URL)
export const HISTORY_BASENAME = process.env.REACT_APP_HISTORY_BASENAME || '';

// Authentication service root url (OIDC Identity Provider)
export const AUTH_URL = process.env.REACT_APP_AUTH_URL;

// Base url of our beloved backend API
export const API_BACKEND = process.env.REACT_APP_MDB_URL;
