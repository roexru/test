import React, { memo } from 'react';
import cx from 'classnames';

import styles from './CartButton.module.scss';
import cartIcon from './assets/cart-icon.svg';

export const CartButton = memo((props) => {
  const { className, counter = 0, onClick } = props;

  return (
    <button className={cx(styles.button, className)} onClick={onClick}>
      <img
        alt="Cart"
        className={styles.image}
        src={cartIcon}
      />
      <span className={styles.counter}>
        {counter}
      </span>
    </button>
  );
});
