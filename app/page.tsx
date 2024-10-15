'use client';

import { CButton } from '@coreui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="content-header" style={{
        marginBottom: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image src="/header-image.png" alt="Header" width={100} height={100} />
        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Dashboard</h1>
      </div>
      <div className="content-banner" style={{
        background: '#1DE9E1',
        padding: '20px 25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: '20px', margin: 0 }}>Welcome to your dashboard!</p>
        <CButton color="success">Get Started</CButton>
      </div>
    </>
  );
}