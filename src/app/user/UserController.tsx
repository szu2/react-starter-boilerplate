import React, { useEffect } from 'react';
import { useQuery } from 'react-fetching-library';

import { fetchCurrentUserAction } from 'api/actions/user/userActions';
import { setAuthorized, setUnauthorized, startAuthorizing } from 'context/auth/authActionCreators/authActionCreators';
import { useAuthDispatch } from 'hooks';
import { Loader } from 'ui/loader/Loader';

import { UserControllerProps } from './UserController.types';

export const UserController: React.FC<UserControllerProps> = ({ children }) => {
  const dispatch = useAuthDispatch();

  const { loading, payload, error } = useQuery(fetchCurrentUserAction());

  useEffect(() => {
    dispatch(startAuthorizing());
  }, [dispatch]);

  useEffect(() => {
    if (!error && payload) {
      return dispatch(setAuthorized(payload));
    }

    return dispatch(setUnauthorized());
  }, [dispatch, error, payload]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};