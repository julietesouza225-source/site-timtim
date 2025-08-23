
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PhotoOfTheDay() {
  const [likes, setLikes] = useState(89);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D5B4F] mb-4">
            Foto do Dia
          </h2>
          <p className="text-lg text-[#1D5B4F]/70 max-w-2xl mx-auto">
            Uma imagem curiosa, engraçada ou marcante da Costa Verde que a Tia não podia deixar passar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Link href="/foto-do-dia" className="block">
              <img
                src="https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20capybara%20sitting%20calmly%20at%20a%20beach%20bar%20table%20in%20Paraty%2C%20with%20tourists%20taking%20photos%20in%20the%20background%2C%20colorful%20tropical%20setting%20with%20palm%20trees%20and%20colonial%20buildings%2C%20golden%20hour%20lighting%2C%20whimsical%20and%20charming%20scene&width=800&height=500&seq=photo-day1&orientation=landscape"
                alt="Foto do dia"
                className="w-full h-96 object-cover object-top hover:opacity-95 transition-opacity cursor-pointer"
              />
            </Link>
            <div className="p-6">
              <Link href="/foto-do-dia">
                <h3 className="text-2xl font-bold text-[#1D5B4F] mb-4 hover:text-[#FF6E3C] transition-colors cursor-pointer">
                  Capivara vira cliente VIP de bar em Paraty! 🐾
                </h3>
              </Link>
              <Link href="/foto-do-dia">
                <p className="text-[#1D5B4F]/70 leading-relaxed mb-6 hover:text-[#1D5B4F] transition-colors cursor-pointer">
                  "Gente, olha só essa capivara sabida! Chegou no bar, sentou na mesa e ficou esperando o cardápio! 
                  Os turistas piraram, todo mundo tirando foto. O garçom até perguntou se ela queria água com gás ou sem gás! 
                  Só faltou pedir a caipirinha! A natureza da Costa Verde é mesmo espetacular! 😂🍹"
                </p>
              </Link>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#F56E87] to-[#FF6E3C] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">TN</span>
                    </div>
                    <span className="text-sm font-medium text-[#1D5B4F]">Tia da Notícia</span>
                  </div>
                  <span className="text-sm text-[#1D5B4F]/60" suppressHydrationWarning={true}>Hoje às 12:15</span>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors whitespace-nowrap ${
                      hasLiked 
                        ? 'bg-[#F56E87] text-white' 
                        : 'text-[#1D5B4F] hover:bg-[#F56E87]/10'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={hasLiked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                    </div>
                    <span className="text-sm font-medium">{likes}</span>
                  </button>

                  <button className="flex items-center space-x-2 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-chat-3-line"></i>
                    </div>
                    <span className="text-sm">23</span>
                  </button>

                  <button className="flex items-center space-x-2 bg-[#FFDF5A] text-[#1D5B4F] px-4 py-2 rounded-full hover:bg-[#F56E87] hover:text-white transition-colors whitespace-nowrap">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    <span className="text-sm font-medium">Enviar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
