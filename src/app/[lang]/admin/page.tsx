import React from 'react';
import { getDictionary } from '@/dictionaries';
import AdminDashboard from '@/components/admin/AdminDashboard';

export const metadata = {
  title: 'Admin Dashboard - Sri Ranganathaswamy Temple',
  description: 'Unified Admin Dashboard',
};

export default async function AdminPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '15vh', minHeight: '15vh', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>Admin Dashboard</h1>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '60vh', padding: '3rem 0' }}>
        <div className="container">
          <AdminDashboard dict={dict} lang={lang} />
        </div>
      </section>
    </>
  );
}
