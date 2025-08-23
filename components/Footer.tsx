
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-orange-50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-[\'Pacifico\']">
              <span style={{ color: '#10B981' }}>Tim Tim</span>
              <span style={{ color: '#3B82F6' }}> Costa Verde</span> 🍹
            </h3>
            <p className="text-orange-50/80 text-sm leading-relaxed">
              O canal que não passa pano — SÓ FOFOCA 🍹<br/>
              Humor, notícias e fofocas da Costa Verde com a irreverência da Tia da Notícia
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-orange-50/80 hover:text-yellow-400 transition-colors">
                Início
              </Link>
              <Link href="/so-fofoca" className="block text-orange-50/80 hover:text-yellow-400 transition-colors">
                SÓ FOFOCA
              </Link>
              <Link href="/videos" className="block text-orange-50/80 hover:text-yellow-400 transition-colors">
                Vídeos da Tia
              </Link>
              <Link href="/contato" className="block text-orange-50/80 hover:text-yellow-400 transition-colors">
                Contato
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/timtimcostaverde" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-teal-700 rounded-full hover:bg-pink-500 transition-colors"
              >
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61578676171822" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-teal-700 rounded-full hover:bg-pink-500 transition-colors"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
            <p className="text-xs text-orange-50/60 mt-4">@timtimcostaverde</p>
          </div>
        </div>

        <div className="border-t border-orange-50/20 mt-8 pt-8 text-center">
          <p className="text-sm text-orange-50/60">
            2024 Tim Tim Costa Verde. Todas as fofocas reservadas! 😄
          </p>
        </div>
      </div>
    </footer>
  );
}
