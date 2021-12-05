import React from 'react';

import { Link } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return(
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/builder">Builder</Link></li>
        <li><Link to="/tester">Tester</Link></li>
      </ul>
      {children}
    </>
  );
}

export default Layout
