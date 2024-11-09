import { useEffect, useState } from 'react';
import { ProcessWarning, ProcessWarningType } from '../types/warning.ts';
import { apiClient } from '../api/client.ts';
import {
  getHeaders,
  showError,
  StandardSuccess,
  UpdateFrequencies,
} from '../types/api.ts';

export const postWarning = async (
  warningType: ProcessWarningType
): Promise<ProcessWarning | false> => {
  const params = {
    warningTypeId: warningType.id,
  };
  const { data: responseData, error } = await apiClient.POST('/user/warning', {
    headers: getHeaders(),
    body: params,
  });
  if (error) {
    showError(error);
    return false;
  }
  return responseData;
};

export const clearWarnings = async (): Promise<StandardSuccess | false> => {
  const { data: responseData, error } = await apiClient.DELETE(
    '/user/warnings',
    {
      headers: getHeaders(),
    }
  );
  if (error) {
    showError(error);
    return false;
  }
  return responseData;
};

export const useWarnings = () => {
  const [warnings, setWarnings] = useState<Array<ProcessWarning>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWarnings = async () => {
    setIsLoading(true);
    const { data: responseData, error } = await apiClient.GET(
      '/user/warnings',
      {
        headers: getHeaders(),
      }
    );
    console.log(responseData);
    if (error) {
      setError(error);
      setIsLoading(false);
    }
    const warnings = responseData.warnings as ProcessWarning[];
    setWarnings(warnings);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchWarnings();
    const interval = setInterval(fetchWarnings, UpdateFrequencies.FIVE_SECONDS);
    return () => clearInterval(interval);
  }, []);

  return { warnings, isLoading, error, fetchWarnings };
};

export const useWarningTypes = () => {
  const [warningTypes, setWarningTypes] = useState<Array<ProcessWarningType>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWarningTypes = async () => {
    setIsLoading(true);
    const { data: responseData, error } = await apiClient.GET(
      '/user/warning-types',
      {
        headers: getHeaders(),
      }
    );
    if (error) {
      setError(error);
      setIsLoading(false);
    }
    const warningTypes = responseData.warningTypes as ProcessWarningType[];
    setWarningTypes(warningTypes);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchWarningTypes();
    const interval = setInterval(fetchWarningTypes, UpdateFrequencies.ONE_HOUR);
    return () => clearInterval(interval);
  }, []);

  return { warningTypes, isLoading, error, fetchWarningTypes };
};
