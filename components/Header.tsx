'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        margin: '0 auto',
        padding: '0 1rem',
        maxWidth: '1200px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem'
        }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}>
            <div className="font-pacifico" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              <span style={{ color: '#1D5B4F' }}>Tim Tim</span>
              <span style={{ color: '#FF6E3C' }}> Costa Verde</span>
            </div>
          </Link>

          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="hidden-mobile">
            <Link href="/" style={{
              color: '#1D5B4F',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Início
            </Link>
            <Link href="/so-fofoca" style={{
              color: '#1D5B4F',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              SÓ FOFOCA
            </Link>
            <Link href="/videos" style={{
              color: '#1D5B4F',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Vídeos da Tia
            </Link>
            <Link href="/foto-do-dia" style={{
              color: '#1D5B4F',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Foto do Dia
            </Link>
            <Link href="/contato" style={{
              color: '#1D5B4F',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}>
              Contato
            </Link>
          </nav>

          <button
            style={{
              color: '#1D5B4F',
              padding: '0.5rem',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
            className="mobile-only"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div style={{
              width: '1.5rem',
              height: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="ri-menu-line" style={{ fontSize: '1.25rem' }}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div style={{
            backgroundColor: 'white',
            borderTop: '1px solid #E5E7EB',
            display: 'block'
          }} className="mobile-only">
            <div style={{
              padding: '1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <Link href="/" style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: '#1D5B4F',
                textDecoration: 'none'
              }}>
                Início
              </Link>
              <Link href="/so-fofoca" style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: '#1D5B4F',
                textDecoration: 'none'
              }}>
                SÓ FOFOCA
              </Link>
              <Link href="/videos" style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: '#1D5B4F',
                textDecoration: 'none'
              }}>
                Vídeos da Tia
              </Link>
              <Link href="/foto-do-dia" style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: '#1D5B4F',
                textDecoration: 'none'
              }}>
                Foto do Dia
              </Link>
              <Link href="/contato" style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: '#1D5B4F',
                textDecoration: 'none'
              }}>
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}