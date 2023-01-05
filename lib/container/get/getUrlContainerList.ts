import { axiosInstance } from '../../apiInteractor/apiInstance';
import { informativeErrorBuilder } from '../../errors/builders/InformativeErrorBuilder';
import { InformativeError } from '../../errors/InformativeError';
import { UrlContainer } from '../UrlContainer';
import { getUrlContainerConfig } from './getContainerConfig';

export const getUrlContainerList = async (): Promise<
  UrlContainer[] | InformativeError
> => {
  try {
    const response = await axiosInstance.post(
      '/containers',
      getUrlContainerConfig
    );

    const urlContainer: UrlContainer[] = response.data as UrlContainer[];

    return [...urlContainer];
  } catch (error: any) {
    return informativeErrorBuilder('Failed to get containers', error.message);
  }
};
