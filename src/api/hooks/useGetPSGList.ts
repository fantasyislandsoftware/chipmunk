import { useQuery } from '@tanstack/react-query';

export type UseGetPSGList = {
  data: any;
  loading: boolean;
  error: unknown;
};

const getPSGList = async () => {
  const data = await window.api.loadFile('psg_imports.json', 'string');
  return JSON.parse(data);
};

export const useGetPSGList = (): UseGetPSGList => {
  const { data, isLoading, error } = useQuery(['getPSGList'], () =>
    getPSGList(),
  );
  return {
    data: data,
    loading: isLoading,
    error: error,
  };
};
