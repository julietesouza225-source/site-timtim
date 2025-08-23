'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const ultimosVideos = [
  {
    id: 1,
    title: "O Caso do Açaí do Prefeito",
    description: "Tia da Notícia comenta o flagra mais comentado da semana! O prefeito foi pego na fila do açaí durante o expediente.",
    views: "2.4k visualizações",
    date: "Hoje às 15:30",
    duration: "4:32",
    thumbnail: "https://readdy.ai/api/search-image?query=Cheerful%20woman%20with%20microphone%20recording%20video%20content%20in%20a%20colorful%20tropical%20setting%2C%20Costa%20Verde%20background%2C%20professional%20video%20setup%2C%20warm%20lighting%2C%20engaging%20personality%2C%20Brazilian%20presenter%20style&width=480&height=270&seq=ultimo1&orientation=landscape"
  },
  {
    id: 2,
    title: "Festa na Praia Virou Confusão",
    description: "Como uma festa terminou com todo mundo dançando junto! A Tia conta os bastidores dessa história incrível.",
    views: "1.8k visualizações", 
    date: "Ontem às 18:45",
    duration: "3:45",
    thumbnail: "https://readdy.ai/api/search-image?query=Beach%20party%20scene%20at%20sunset%20with%20people%20dancing%2C%20Angra%20dos%20Reis%20coastline%2C%20colorful%20party%20atmosphere%2C%20warm%20golden%20lighting%2C%20tropical%20beach%20setting%20with%20mountains%20in%20background&width=480&height=270&seq=ultimo2&orientation=landscape"
  },
  {
    id: 3,
    title: "Influencer no Mercadinho",
    description: "A famosa que pediu desconto na banana! Tia não perdoa e comenta tudo com muito humor.",
    views: "3.2k visualizações",
    date: "Anteontem às 14:20", 
    duration: "5:12",
    thumbnail: "https://readdy.ai/api/search-image?query=Young%20fashionable%20woman%20shopping%20at%20a%20small%20colorful%20local%20market%20in%20a%20Brazilian%20coastal%20town%2C%20tropical%20village%20setting%20with%20fresh%20fruits%2C%20authentic%20small%20town%20atmosphere&width=480&height=270&seq=ultimo3&orientation=landscape"
  },
  {
    id: 4,
    title: "Vereador Cantando na Sessão",
    description: "O momento épico do sertanejo no microfone! Quando o político esqueceu que estava ao vivo.",
    views: "4.1k visualizações",
    date: "3 dias atrás",
    duration: "2:58",
    thumbnail: "https://readdy.ai/api/search-image?query=Politician%20at%20a%20microphone%20in%20a%20government%20chamber%20looking%20embarrassed%20while%20singing%2C%20humorous%20moment%2C%20warm%20lighting%2C%20Brazilian%20municipal%20building%20interior&width=480&height=270&seq=ultimo4&orientation=landscape"
  },
  {
    id: 5,
    title: "Sagui Cliente VIP",
    description: "O macaquinho que virou hóspede da pousada! Uma história que só acontece aqui na Costa Verde.",
    views: "2.9k visualizações",
    date: "4 dias atrás", 
    duration: "4:18",
    thumbnail: "https://readdy.ai/api/search-image?query=Small%20monkey%20sitting%20at%20a%20breakfast%20table%20in%20a%20charming%20Brazilian%20pousada%2C%20guests%20smiling%20in%20background%2C%20tropical%20morning%20scene%20with%20colorful%20fruits%20and%20natural%20lighting&width=480&height=270&seq=ultimo5&orientation=landscape"
  },
  {
    id: 6,
    title: "Cachorro Surfista de Trindade",
    description: "Como o Bolt virou o surfista mais famoso da Costa Verde! Uma história de superação canina.",
    views: "5.7k visualizações",
    date: "1 semana atrás",
    duration: "6:24", 
    thumbnail: "https://readdy.ai/api/search-image?query=Golden%20retriever%20dog%20surfing%20on%20ocean%20waves%20at%20Trindade%20beach%2C%20people%20watching%20from%20the%20shore%2C%20beautiful%20Costa%20Verde%20coastline%2C%20action%20photography%20style&width=480&height=270&seq=ultimo6&orientation=landscape"
  }
];

export default function UltimosVideosPage() {
  return (
    <div className="min-h-screen bg-[#FDF3E7]">
      <Header />
      
      <main>
        <section className="py-16 bg-gradient-to-br from-[#1D5B4F] to-[#007487]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Últimos Vídeos 🎬
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Os vídeos mais recentes da Tia da Notícia! Fique por dentro de tudo que acontece na Costa Verde
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1D5B4F] mb-2">
                Publicados recentemente
              </h2>
              <p className="text-[#1D5B4F]/70">
                Confira os vídeos mais quentes da semana!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ultimosVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-2/5">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 md:h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
                          <i className="ri-play-fill text-white text-2xl"></i>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black/80 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-[#1D5B4F] mb-3 hover:text-[#FF6E3C] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-[#1D5B4F]/70 text-sm leading-relaxed mb-4">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#1D5B4F]/60 mb-4">
                        <span>{video.views}</span>
                        <span>{video.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button className="flex items-center space-x-1 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-thumb-up-line"></i>
                            </div>
                            <span className="text-sm">{Math.floor(Math.random() * 200) + 50}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-chat-3-line"></i>
                            </div>
                            <span className="text-sm">{Math.floor(Math.random() * 50) + 10}</span>
                          </button>
                        </div>
                        <button className="bg-[#FFDF5A] text-[#1D5B4F] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#F56E87] hover:text-white transition-colors whitespace-nowrap">
                          Assistir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/videos">
                <button className="bg-[#1D5B4F] text-white px-8 py-3 rounded-full font-bold hover:bg-[#007487] transition-colors whitespace-nowrap">
                  Ver Todos os Vídeos
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}