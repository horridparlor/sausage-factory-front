import { toast } from 'react-toastify';

export enum AuthCookie {
  AUTH_TOKEN = 'AuthToken',
  SYSTEM_USER = 'SystemUser',
}

export enum UpdateFrequencies {
  FIVE_SECONDS = 3000,
  TEN_SECONDS = 6000,
  ONE_MINUTE = 60000,
  TWO_MINUTES = 120000,
  FIVE_MINUTES = 300000,
  TEN_MINUTES = 600000,
  TWENTY_MINUTES = 1200000,
  THIRTY_MINUTES = 1800000,
  ONE_HOUR = 3600000,
  TWO_HOURS = 7200000,
  SIX_HOURS = 21600000,
  TWELVE_HOURS = 43200000,
}

export type StandardSuccess = {
  message: string;
};

export type StandardError = {
  error: string;
};

import Cookies from 'js-cookie';

export const getHeaders = () => {
  const authToken = Cookies.get(AuthCookie.AUTH_TOKEN);
  return {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  };
};

export const showError = (responseData: { [key: string]: string }) => {
  const errorMessage = 'Error: ' + responseData.error || 'Network error';
  toast.error(errorMessage);
};
