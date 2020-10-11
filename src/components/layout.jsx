import React from 'react';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

export default function Layout({ children }) {
  const style = {
    margin: `2rem auto`,
    maxWidth: 650,
    padding: `2rem 2rem`,
    borderRadius: `6px`,
    boxShadow: `4px 4px 6px rgba(0, 0, 0, 0.4)` ,
    boxShadow: `inset 8px 8px 8px #cbced1 ,
              inset -8px -8px 8px #ffffff` ,
};

  if (isMobile) {
    style.margin = `auto`;
    style.border = `inherit`;
    return <MobileView style={style}>{children}</MobileView>;
  }

  return <BrowserView style={style}>{children}</BrowserView>;
}
