import React from 'react';
import {Link} from 'gatsby';
import styles from './entry.module.css';

const Entry = (entry) => {
  const {title, subtitle, link, coverImg, intro, date} = entry;
  return (
    <div className={styles.box}>
      <div className="left">
        <Link to={link}>{title}</Link>
        <p>{subtitle}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.right}>
        <p className={styles.intro}>{intro}</p>
      </div>
      <div>
        <img src={coverImg} alt=""/>
      </div>
    </div>
  );
};

export default Entry;