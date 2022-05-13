import React, { memo } from 'react';
import cx from 'classnames';

import styles from './MenuButton.module.scss';


export const MenuButton = memo((props) => {
  const { className, onClick } = props;

  return (
    <button
      className={cx(styles.button, className)}
      onClick={onClick}
    />
  );
});
