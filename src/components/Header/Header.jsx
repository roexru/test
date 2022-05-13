import React, { memo, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import cx from 'classnames';

import { CartButton } from '../CartButton';
import { Logo } from '../Logo';
import { MenuButton } from '../MenuButton';
import { MuteButton } from '../MuteButton';
import { Navigation } from '../Navigation';
import { PlayButton } from '../PlayButton';
import { RotatingExtraLink } from '../RotatingExtraLink';

import styles from './Header.module.scss';

export const Header = memo((props) => {
  const {
    cartCounter,
    extraLinkUrl,
    onCartClick,
    navigation,
    videoId,
  } = props;

  const [videoMuted, setVideoMuted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const innerRef = useRef(null);
  const playButtonRef = useRef(null);
  const playButtonStyleRef = useRef({});

  const handleMouseMove = ({ clientX, clientY }) => {
    const buttonNode = playButtonRef.current;
    const innerRects = innerRef.current.getBoundingClientRect();

    const halfHeight = buttonNode.clientHeight / 2;
    const halfWidth = buttonNode.clientWidth / 2;

    const left = Math.max(0, Math.min(window.innerWidth - halfWidth * 2, clientX - halfWidth));
    const top = Math.max(innerRects.top * !videoPlaying, Math.min(innerRects.bottom - halfHeight, clientY - halfHeight));

    buttonNode.style.left = `${left}px`;
    buttonNode.style.top = `${top}px`;
    playButtonStyleRef.left = `${left}px`;
    playButtonStyleRef.top = `${top}px`;
  };

  const handleMuteButtonClick = () => {
    setVideoMuted((value) => !value);
  };

  const handlePlayButtonClick = () => {
    setVideoPlaying((value) => !value);
  };

  const handlePauseVideo = () => {
    setVideoPlaying(false);
  };

  return (
    <header
      className={styles.container}
      onMouseMove={handleMouseMove}
    >
      <div className={cx(styles.video, videoPlaying && styles.video_visible)}>
        <ReactPlayer
          height="100vh"
          playing={videoPlaying}
          onEnded={handlePauseVideo}
          onPause={handlePauseVideo}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          volume={!videoMuted * 1}
          width="100vw"
        />
      </div>
      <div className={styles.top}>
        <div className={styles.top_column}>
          <MenuButton className={styles.menu_button} />
          <Navigation
            className={styles.navigation}
            items={navigation}
          />
        </div>
        <div className={styles.top_column}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.top_column}>
          <CartButton
            counter={cartCounter}
            onClick={onCartClick}
          />
        </div>
      </div>
      <div className={styles.inner}
        ref={innerRef}
      >
        <h1 className={styles.title}>
          <span>We are creat</span>
          <small>emotions</small>
        </h1>
        <RotatingExtraLink
          className={styles.extra_link}
          url={extraLinkUrl}
        />
        {videoPlaying && (
          <MuteButton
            className={styles.mute_button}
            muted={videoMuted}
            onClick={handleMuteButtonClick}
          />
        )}
        <div
          className={styles.play_button_wrapper}
          onClick={handlePlayButtonClick}
        >
          <span className={styles.play_button_label}>
            Смотреть видео
          </span>
          <PlayButton
            className={cx(styles.play_button, videoPlaying && styles.play_button_paused)}
            ref={playButtonRef}
            paused={videoPlaying}
            style={{ ...playButtonStyleRef.current }}
          />
        </div>
      </div>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url('https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg')`,
        }}
      />
    </header>
  );
});
