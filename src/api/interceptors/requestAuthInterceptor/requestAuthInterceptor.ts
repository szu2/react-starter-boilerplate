import { RequestInterceptor } from 'react-fetching-library';
import { Action } from 'api/types';

export const requestAuthInterceptor: (accessToken: string | null) => RequestInterceptor = accessToken => () => async (
  action: Action,
) => {
  if (action.skipAuthorization) {
    return action;
  }

  return {
    ...action,
    headers: {
      ...(action.headers ?? {}),
      Authorization: `Bearer ${accessToken ?? ''}`,
    },
  };
};