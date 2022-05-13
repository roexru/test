import React from 'react';

import logoIcon from './assets/logo.svg';

export const Logo = (props) => {
  const { className } = props;

  return (
    <img
      alt="Hipster Studio"
      className={className}
      src={logoIcon}
    />
  );
};
