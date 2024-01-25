import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './Auth/Auth';

const Routes = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default Routes;
