/* eslint-disable no-unused-vars */
import React from 'react';

import classNames from 'classnames/bind';
import styles from '../scss/app';
let cx = classNames.bind(styles);

function Footer(props, context) {
  return (
   <div className={cx('footer')}>
     <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
     <p>We are on Twitter : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
   </div>
 );
}

export default Footer;
