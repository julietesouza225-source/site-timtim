
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function VideoFeature() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-12 bg-[#F56E87]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D5B4F] mb-4">
            Vídeo da Tia da Notícia
          </h2>
          <p className="text-lg text-[#1D5B4F]/70 max-w-2xl mx-auto">
            Tia comenta a fofoca do dia com muito bom humor e aquele jeitinho carioca que só ela tem!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-[#1D5B4F] to-[#007487] flex items-center justify-center relative">
              {!isPlaying ? (
                <div className="text-center text-white">
                  <button 
                    onClick={handlePlayVideo}
                    className="w-20 h-20 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer"
                  >
                    <i className="ri-play-fill text-3xl"></i>
                  </button>
                  <h3 className="text-xl font-bold mb-2">
                    "O Caso do Açaí do Prefeito"
                  </h3>
                  <p className="text-white/80">
                    Tia da Notícia comenta o flagra mais comentado da semana!
                  </p>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="O Caso do Açaí do Prefeito"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F56E87] to-[#FF6E3C] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TN</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1D5B4F]">Tia da Notícia</h4>
                    <p className="text-xs text-[#1D5B4F]/60">Publicado hoje às 15:30</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#1D5B4F]/60">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-eye-line"></i>
                  </div>
                  <span>2.4k visualizações</span>
                </div>
              </div>
              <Link href="/videos">
                <p className="text-[#1D5B4F]/70 leading-relaxed cursor-pointer hover:text-[#1D5B4F] transition-colors">
                  "Gente, vocês não vão acreditar no que a Tia viu hoje! O prefeito lá na fila do açaí, 
                  todo trabalhado, pedindo extra granola. Eu pensei: será que isso é reunião de trabalho? 
                  Porque açaí resolve muita coisa mesmo! 😂"
                </p>
              </Link>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-thumb-up-line"></i>
                    </div>
                    <span className="text-sm">127</span>
                  </button>
                  <button className="flex items-center space-x-2 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-chat-3-line"></i>
                    </div>
                    <span className="text-sm">35 comentários</span>
                  </button>
                </div>
                <button className="flex items-center space-x-2 bg-[#FFDF5A] text-[#1D5B4F] px-4 py-2 rounded-full hover:bg-[#F56E87] hover:text-white transition-colors whitespace-nowrap">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-share-line"></i>
                  </div>
                  <span className="text-sm font-medium">Compartilhar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
