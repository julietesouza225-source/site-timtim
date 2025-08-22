'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const photosOfTheDay = [
  {
    id: 1,
    title: "Capivara vira cliente VIP de bar em Paraty! 🐾",
    description: "Gente, olha só essa capivara sabida! Chegou no bar, sentou na mesa e ficou esperando o cardápio! Os turistas piraram, todo mundo tirando foto. O garçom até perguntou se ela queria água com gás ou sem gás! Só faltou pedir a caipirinha! A natureza da Costa Verde é mesmo espetacular! 😂🍹",
    image: "https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20capybara%20sitting%20calmly%20at%20a%20beach%20bar%20table%20in%20Paraty%2C%20with%20tourists%20taking%20photos%20in%20the%20background%2C%20colorful%20tropical%20setting%20with%20palm%20trees%20and%20colonial%20buildings%2C%20golden%20hour%20lighting%2C%20whimsical%20and%20charming%20scene&width=800&height=500&seq=photo1&orientation=landscape",
    date: "Hoje às 12:15",
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    title: "Pelicano 'rouba' lanche de turista em Angra! 🐦",
    description: "O danado chegou voando, pegou o sanduíche e saiu voando! O turista ficou sem almoço, mas ganhou uma história pra contar pros netos! Esses bichos da Costa Verde são espertos demais! 😂",
    image: "https://readdy.ai/api/search-image?query=Large%20pelican%20stealing%20a%20sandwich%20from%20a%20surprised%20tourist%20at%20Angra%20dos%20Reis%20waterfront%2C%20boats%20and%20mountains%20in%20background%2C%20action%20moment%20captured%2C%20tropical%20coastal%20scene%2C%20humorous%20wildlife%20encounter&width=800&height=500&seq=photo2&orientation=landscape",
    date: "Ontem às 16:40",
    likes: 156,
    comments: 45
  },
  {
    id: 3,
    title: "Coqueiro 'dançarino' vira atração em Trindade! 🌴",
    description: "Esse coqueiro cresceu todo tortinho e agora parece que tá dançando! Os turistas param só pra tirar foto com ele. Virou ponto turístico não oficial de Trindade! A natureza tem dessas mesmo!",
    image: "https://readdy.ai/api/search-image?query=Curved%20palm%20tree%20growing%20in%20a%20dancing%20shape%20on%20Trindade%20beach%2C%20tourists%20posing%20for%20photos%2C%20beautiful%20coastal%20scenery%2C%20unique%20natural%20formation%2C%20tropical%20paradise%20setting%20with%20crystal%20clear%20water&width=800&height=500&seq=photo3&orientation=landscape",
    date: "Anteontem às 10:20",
    likes: 203,
    comments: 67
  }
];

export default function FotoDoDiaPage() {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const handleLike = (photoId: number, currentLikes: number) => {
    const isLiked = likedPhotos.includes(photoId);
    if (isLiked) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
      return currentLikes - 1;
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
      return currentLikes + 1;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF3E7]">
      <Header />
      
      <main>
        <section className="py-16 bg-gradient-to-br from-[#FFDF5A] to-[#F56E87]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Foto do Dia 📸
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              As imagens mais curiosas, engraçadas e marcantes da Costa Verde que a Tia não podia deixar passar!
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {photosOfTheDay.map((photo) => {
                const [likes, setLikes] = useState(photo.likes);
                const isLiked = likedPhotos.includes(photo.id);
                
                return (
                  <div key={photo.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-96 object-cover object-top"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#1D5B4F] mb-4">
                        {photo.title}
                      </h3>
                      <p className="text-[#1D5B4F]/70 leading-relaxed mb-6">
                        {photo.description}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#F56E87] to-[#FF6E3C] rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">TN</span>
                            </div>
                            <span className="text-sm font-medium text-[#1D5B4F]">Tia da Notícia</span>
                          </div>
                          <span className="text-sm text-[#1D5B4F]/60">{photo.date}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => {
                              const newLikes = handleLike(photo.id, likes);
                              setLikes(newLikes);
                            }}
                            className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors whitespace-nowrap ${
                              isLiked 
                                ? 'bg-[#F56E87] text-white' 
                                : 'text-[#1D5B4F] hover:bg-[#F56E87]/10'
                            }`}
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className={isLiked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                            </div>
                            <span className="text-sm font-medium">{likes}</span>
                          </button>

                          <button className="flex items-center space-x-2 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-chat-3-line"></i>
                            </div>
                            <span className="text-sm">{photo.comments}</span>
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
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}