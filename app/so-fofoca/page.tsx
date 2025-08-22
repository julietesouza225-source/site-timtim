'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const fofocaPosts = [
  {
    id: 1,
    title: "Prefeito de Paraty é flagrado comprando açaí no horário de trabalho",
    excerpt: "A Tia da Notícia não deixa passar! Flagramos o prefeito na fila do açaí durante expediente. Será que estava em reunião de trabalho? 🤔",
    image: "https://readdy.ai/api/search-image?query=A%20cheerful%20middle-aged%20man%20in%20business%20attire%20buying%20a%C3%A7a%C3%AD%20at%20a%20colorful%20tropical%20street%20stand%2C%20bright%20Costa%20Verde%20beach%20town%20background%20with%20palm%20trees%20and%20colonial%20architecture%2C%20warm%20sunny%20lighting%2C%20people%20walking%20around%2C%20vibrant%20colors&width=400&height=250&seq=fofoca1&orientation=landscape",
    date: "Hoje, 14:30",
    author: "Tia da Notícia"
  },
  {
    id: 4,
    title: "Vereador esquece microfone ligado e cantarola sertanejo durante sessão",
    excerpt: "O homem estava no maior 'Ai se eu te pego' achando que ninguém ouvia! 🎵",
    image: "https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20politician%20at%20a%20microphone%20in%20a%20government%20chamber%2C%20singing%20and%20looking%20embarrassed%2C%20warm%20lighting%2C%20Brazilian%20municipal%20building%20interior%2C%20colorful%20and%20humorous%20atmosphere&width=400&height=250&seq=fofoca2&orientation=landscape",
    date: "2h atrás",
    author: "Tia da Notícia"
  },
  {
    id: 5,
    title: "Dono de pousada é flagrado dando comida para sagui no café da manhã",
    excerpt: "Os hóspedes adoraram, mas o sagui virou cliente fixo!",
    image: "https://readdy.ai/api/search-image?query=Small%20monkey%20eating%20at%20a%20breakfast%20table%20in%20a%20charming%20Brazilian%20pousada%2C%20guests%20laughing%20in%20the%20background%2C%20tropical%20morning%20scene%20with%20colorful%20fruits%20and%20warm%20sunlight&width=400&height=250&seq=fofoca3&orientation=landscape",
    date: "4h atrás",
    author: "Tia da Notícia"
  },
  {
    id: 12,
    title: "Turista perde celular na praia e encontra 200 fotos de caranguejos",
    excerpt: "Alguém achou o celular e resolveu fazer uma sessão de fotos com os bichinhos! 📸",
    image: "https://readdy.ai/api/search-image?query=Colorful%20crabs%20on%20a%20beautiful%20beach%20with%20a%20smartphone%20taking%20photos%2C%20tropical%20Costa%20Verde%20setting%2C%20funny%20and%20charming%20scene%2C%20bright%20daylight%2C%20crystal%20clear%20water&width=400&height=250&seq=fofoca4&orientation=landscape",
    date: "6h atrás",
    author: "Tia da Notícia"
  },
  {
    id: 13,
    title: "Comerciante de Angra vende 'água da juventude' por R$ 50",
    excerpt: "É água da torneira com umas gotinhas de limão, mas o povo tá comprando!",
    image: "https://readdy.ai/api/search-image?query=Elderly%20man%20selling%20bottled%20water%20at%20a%20colorful%20market%20stall%20in%20Angra%20dos%20Reis%2C%20customers%20looking%20curious%2C%20tropical%20setting%20with%20boats%20in%20background%2C%20humorous%20documentary%20style&width=400&height=250&seq=fofoca5&orientation=landscape",
    date: "8h atrás",
    author: "Tia da Notícia"
  },
  {
    id: 14,
    title: "Cachorro surfista vira sensação na praia de Trindade",
    excerpt: "O Bolt aprendeu a surfar sozinho e agora tem mais seguidores que muito influencer!",
    image: "https://readdy.ai/api/search-image?query=Golden%20retriever%20dog%20surfing%20on%20a%20wave%20at%20Trindade%20beach%2C%20people%20cheering%20on%20the%20beach%2C%20beautiful%20Costa%20Verde%20coastline%2C%20action%20shot%2C%20tropical%20paradise%20setting&width=400&height=250&seq=fofoca6&orientation=landscape",
    date: "10h atrás",
    author: "Tia da Notícia"
  }
];

export default function SoFofocaPage() {
  return (
    <div className="min-h-screen bg-[#FDF3E7]">
      <Header />
      
      <main>
        <section className="py-16 bg-gradient-to-br from-[#FF6E3C] to-[#F56E87]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              SÓ FOFOCA! 🍹
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Aqui a Tia não passa pano pra ninguém! Todas as fofocas quentes da Costa Verde
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fofocaPosts.map((post) => (
                <Link key={post.id} href={`/artigo/${post.id}`}>
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#FF6E3C] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          SÓ FOFOCA
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#1D5B4F] mb-3 hover:text-[#FF6E3C] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#1D5B4F]/70 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#1D5B4F]/60">
                        <span className="font-medium">{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}