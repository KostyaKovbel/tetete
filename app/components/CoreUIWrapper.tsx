'use client';

import { CContainer } from '@coreui/react';
import Sidebar from './Sidebar';

export default function CoreUIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <CContainer>{children}</CContainer>
      </div>
    </div>
  );
}