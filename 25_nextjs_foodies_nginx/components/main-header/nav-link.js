'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import React from 'react';
import classes from './nav-link.module.css';

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
};
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: React.ReactNode,
};
export default NavLink;
