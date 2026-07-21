import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default async function RockfortTemple({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const contentPath = path.join(process.cwd(), 'src', 'content', 'rockfort-ucchi-pillayar-temple', `${lang}.md`);
  let content = '';
  try {
    content = fs.readFileSync(contentPath, 'utf8');
  } catch (e) {
    content = fs.readFileSync(path.join(process.cwd(), 'src', 'content', 'rockfort-ucchi-pillayar-temple', `en.md`), 'utf8');
  }

  const topics = Array.from(content.matchAll(/^## (.*?)$/gm)).map(m => {
    return {
      id: generateSlug(m[1]),
      title: m[1]
    };
  });

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/Rockfort2.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 style={{ marginTop: '0', fontSize: '2.5rem' }}>Rockfort Ucchi Pillayar Temple</h1>
          <div className="subtitle" style={{ whiteSpace: 'normal' }}>Trichy's Sky-High Shrine to Ganesha</div>
        </div>
      </section>

      <div className="temple-wrapper" style={{ backgroundColor: '#fdfaf4', minHeight: '100vh', padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {topics.length > 0 && (
            <div className="temple-card-inner" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
              <h2 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.5rem', borderBottom: '2px solid #f0e6d6', paddingBottom: '0.5rem' }}>Contents</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {topics.map(t => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} style={{ color: '#d95c14', textDecoration: 'none', fontWeight: 500, display: 'inline-block', transition: 'color 0.2s ease' }}>
                      {t.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="temple-card-inner" style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', lineHeight: '1.8', color: '#444', fontSize: '1.05rem' }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.5rem', fontSize: '2rem' }} {...props} />,
                h2: ({node, children, ...props}) => {
                  const text = String(children);
                  return <h2 id={generateSlug(text)} style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }} {...props}>{children}</h2>
                },
                h3: ({node, ...props}) => <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }} {...props} />,
                ul: ({node, ...props}) => <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} {...props} />,
                ol: ({node, ...props}) => <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} {...props} />,
                a: ({node, ...props}) => <a style={{ color: 'var(--primary-color)', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />,
                table: ({node, ...props}) => <div style={{ overflowX: 'auto' }}><table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }} {...props} /></div>,
                th: ({node, ...props}) => <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid #eee', color: 'var(--primary-color)' }} {...props} />,
                td: ({node, ...props}) => <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }} {...props} />,
                img: ({node, ...props}) => (
                  <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img {...props} style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }} alt={props.alt || ''} />
                  </div>
                ),
                hr: ({node, ...props}) => <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '2rem 0' }} {...props} />,
                p: ({node, children, ...props}) => {
                  if (node?.children?.[0]?.type === 'element' && node.children[0].tagName === 'img') {
                    return <>{children}</>;
                  }
                  return <p style={{ marginBottom: '1rem' }} {...props}>{children}</p>;
                }
              }}
            >
              {content}
            </ReactMarkdown>

            <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#777', fontStyle: 'italic', textAlign: 'center' }}>
              *Please note Images used in this website were enhanced using advance techniques and AI to make it better.*
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
