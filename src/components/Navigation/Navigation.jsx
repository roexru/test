import React, { memo, useState } from 'react';
import cx from 'classnames';

import styles from "./Navigation.module.scss";

export const Navigation = memo((props) => {
  const { className, items } = props;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const listClassName = cx(
    styles.list,
    hovered && styles.hovered,
    className,
  );

  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li
          className={styles.item}
          key={item.title}
        >
          <a
            href={item.url}
            onBlur={handleMouseLeave}
            onFocus={handleMouseEnter}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
});
