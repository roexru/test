import React, { forwardRef } from 'react';
import cx from 'classnames';

import styles from './PlayButton.module.scss';

import iconPause from './assets/pause.svg';
import iconPlay from './assets/play.svg';


export const PlayButton = forwardRef((props, ref) => {
  const {
    className,
    paused = false,
    onClick,
    style,
  } = props;

  return (
    <button
      className={cx(styles.button, className)}
      onClick={onClick}
      ref={ref}
      style={style}
    >
      <img
        alt="Play"
        className={paused ? styles.icon_pause : styles.icon_play}
        src={paused ? iconPause : iconPlay}
      />
    </button>
  );
});
