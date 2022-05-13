import React, { useCallback } from 'react';

import { Header } from '../../components/Header';
import { navigation } from '../../constants/navigation';


export const MainView = () => {
  const handleCartClick = useCallback(() => {
    console.log('Click on cart');
  }, []);

  return (
    <Header
      cartCounter={0}
      extraLinkUrl=""
      onCartClick={handleCartClick}
      navigation={navigation}
      videoId="ReTGM_h52q0"
    />
  );
};
