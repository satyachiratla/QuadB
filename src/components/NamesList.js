import React from 'react';

import Name from './Name';
import classes from './NamesList.module.css';

const NameList = (props) => {
  return (
    <ul className={classes['names-list']}>
      {props.names.map((name) => (
        <Name
          key={name.id}
          title={name.title}
          summary={name.summary}
        />
      ))}
    </ul>
  );
};

export default NameList;
