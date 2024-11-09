import { useEffect, useState } from 'react';
import { LineSubprocess } from '../types/subprocess.ts';
import { apiClient } from '../api/client.ts';
import { getHeaders, UpdateFrequencies } from '../types/api.ts';
import { ProcessWarningType } from '../types/warning.ts';

export const useSubprocesses = () => {
  const [subprocesses, setSubprocesses] = useState<Array<LineSubprocess>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubprocesses = async () => {
    setIsLoading(true);
    const { data: responseData, error } = await apiClient.GET(
      '/user/subprocesses',
      {
        headers: getHeaders(),
      }
    );
    if (error) {
      setError(error);
      setIsLoading(false);
    }
    const subprocesses = responseData.subprocesses as LineSubprocess[];
    setSubprocesses(subprocesses);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchSubprocesses();
    const interval = setInterval(fetchSubprocesses, UpdateFrequencies.ONE_HOUR);
    return () => clearInterval(interval);
  }, []);

  return { subprocesses, isLoading, error, fetchSubprocesses };
};
