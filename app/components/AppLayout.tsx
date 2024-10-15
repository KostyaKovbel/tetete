'use client';

import { CContainer } from '@coreui/react';
import Sidebar from './Sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="page-container" style={{
        flexGrow: 1,
        padding: '36px 30px 0 30px'
      }}>
        <div className="content-container" style={{
          background: 'white',
          padding: '50px'
        }}>
          <CContainer>{children}</CContainer>
        </div>
      </div>
    </div>
  );
}