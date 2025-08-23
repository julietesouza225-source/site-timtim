
'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedArticles from '../components/FeaturedArticles';
import VideoFeature from '../components/VideoFeature';
import PhotoOfTheDay from '../components/PhotoOfTheDay';
import CategorizedPosts from '../components/CategorizedPosts';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <Header />

      <main>
        <section
          className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://static.readdy.ai/image/22df1471484a0aa97ceaa6d66ff3ecd6/a64ed1933c8d13d447c458ac4563b1f4.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 h-full flex items-center px-8">
            <div className="max-w-7xl mx-auto w-full">
              <div className="max-w-2xl">
                <div className="mb-8">
                  <span className="bg-[#FBBF24] text-[#065F46] px-6 py-3 rounded-full text-lg font-bold shadow-xl">
                    🔥 O canal que não passa pano!
                  </span>
                </div>

                <h1 className="font-[('Pacifico')] text-6xl font-bold mb-8 text-shadow-lg leading-tight">
                  <span className="text-white">Tim Tim</span>
                  <span className="text-white"> Costa Verde</span>
                </h1>

                <p className="text-xl text-white mb-12 leading-relaxed text-shadow">
                  O canal de humor e fofocas da Costa Verde! Paraty, Angra dos Reis,
                  Mangaratiba... tudo que rola por aqui você fica sabendo primeiro! 🍹✨
                </p>

                <div className="flex flex-col gap-4 max-w-sm">
                  <Link href="/ultimos-videos">
                    <button className="bg-[#EA580C] text-white px-8 py-4 rounded-full border-none font-bold text-lg shadow-xl cursor-pointer whitespace-nowrap hover:bg-[#DC2626] transition-colors w-full">
                      <i className="ri-play-fill mr-2"></i>
                      Assistir Último Vídeo
                    </button>
                  </Link>

                  <a
                    href="https://www.instagram.com/timtimcostaverde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-bold text-lg cursor-pointer whitespace-nowrap hover:bg-white hover:text-black transition-colors w-full">
                      <i className="ri-instagram-line mr-2"></i>
                      Seguir no Instagram
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedArticles />
        <VideoFeature />
        <PhotoOfTheDay />
        <CategorizedPosts />
      </main>

      <Footer />
    </div>
  );
}
