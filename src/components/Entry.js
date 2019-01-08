import React from 'react';
import {Link, navigate} from "gatsby"
import styles from './entry.module.css';

const Entry = (entry) => {
  const {title, subtitle, link, intro, date} = entry;
  return (
    <div onClick={() => navigate(link)} className={styles.box}>
      <div>
        <div className={styles.left}>
          <Link className={styles.title} to={link}>{title}</Link>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.right}>
          <p className={styles.date}>{date}</p>
        </div>
        <div className="clear"></div>
      </div>
      <p className={styles.intro}>{intro}</p>
    </div>
  );
};

export default Entry;