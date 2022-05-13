import React from 'react';
import cx from 'classnames';

import styles from './RotatingExtraLink.module.scss';
import arrowIcon from './assets/arrow.svg'
import wheelIcon from './assets/wheel.svg';

export const RotatingExtraLink = (props) => {
  const { className, url } = props;

  return (
    <a
      className={cx(styles.container, className)}
      href={url}
    >
      <img
        alt=""
        className={styles.wheel}
        src={wheelIcon}
      />
      <img
        alt=""
        className={styles.arrow_icon}
        src={arrowIcon}
      />
    </a>
  );
};
