import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const redirects = [
  { from: '/learn/smart-contracts', to: '/learn/advanced concepts/smart-contracts' },
  { from: '/learn/ipo', to: '/learn/advanced concepts/ipo' },
  { from: '/learn/dutch-auction', to: '/learn/advanced concepts/dutch-auction' },
  { from: '/learn/tokenomics', to: '/learn/basics/tokenomics' },
];

export default function Redirects() {
  const {siteConfig} = useDocusaurusContext();
  const {baseUrl} = siteConfig;
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const redirect = redirects.find(r => pathname.startsWith(baseUrl + r.from));
  
  if (redirect) {
    return <Redirect to={redirect.to} />;
  }
  
  return null;
}