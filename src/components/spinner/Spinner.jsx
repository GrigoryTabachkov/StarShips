import React from 'react';
import cx from 'classnames';
import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.loader}>
    <div className={ cx(styles.inner, styles.one)}/>
    <div className={ cx(styles.inner, styles.two)}/>
    <div className={ cx(styles.inner, styles.three)}/>
  </div>
);

export default Spinner;
