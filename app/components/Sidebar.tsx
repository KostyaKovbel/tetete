'use client';

import { CNavGroup, CNavItem, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <CSidebar
      style={{
        backgroundColor: '#333B4E',
        maxWidth: '251px',
        padding: '16px',
      }}
    >
      <CSidebarBrand style={{ marginBottom: '66px' }}>
        <Image src="/logo.png" alt="logo" width={219} height={40} />
      </CSidebarBrand>
      <CSidebarNav>
        <CNavGroup>
          {['Dashboard', 'Images', 'Product', 'Categories'].map((item) => (
            <CNavItem key={item} style={{ padding: '15px 87px' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                {item}
              </Link>
            </CNavItem>
          ))}
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;