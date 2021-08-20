import React, { Fragment } from 'react';
import { Header } from './Header';

export const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);
