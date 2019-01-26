import React from 'react';
import {Link, navigate} from "gatsby"

const Entry = (entry) => {
  const {title, subtitle, link, intro, date} = entry;
  return (
    <div onClick={() => navigate(link)} className="entry">
      <div>
        <div className="left">
          <Link className="title" to={link}>
            <h3>{title}</h3>
          </Link>
        </div>
        <div className="right">
          <p className="date">{date}</p>
        </div>
        <div className="clear"></div>
      </div>
      <p className="subtitle">{subtitle}</p>
      <p className="intro">{intro}</p>
    </div>
  );
};

export default Entry;