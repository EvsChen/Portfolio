import React from 'react';
import { Link } from 'react-router-dom';

const Entry = (entry) => {
  const {title, subtitle, link, intro, date} = entry;
  return (
    <Link to={link} className="entry">
      <div>
        <div className="left">
          <h3 className="title">{title}</h3>
        </div>
        <div className="right">
          <p className="date">{date}</p>
        </div>
        <div className="clear"></div>
      </div>
      <p className="subtitle">{subtitle}</p>
      <p className="intro">{intro}</p>
    </Link>
  );
};

export default Entry;