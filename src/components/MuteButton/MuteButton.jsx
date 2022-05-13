import React, { forwardRef } from 'react';
import cx from 'classnames';

import styles from './MuteButton.module.scss';

import iconMute from './assets/mute.svg';
import iconUnmute from './assets/unmute.svg';


export const MuteButton = forwardRef((props, ref) => {
  const {
    className,
    muted = false,
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
        className={styles.icon}
        src={muted ? iconMute : iconUnmute}
      />
    </button>
  );
});
