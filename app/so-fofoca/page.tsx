'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const soFofocaArticles = [
  {
    id: 1,
    title: "Prefeito de Paraty é flagrado comprando açaí no horário de trabalho",
    excerpt: "A Tia da Notícia não deixa passar! Flagramos o prefeito na fila do açaí durante expediente.",
    date: "Hoje, 14:30",
    image: "https://readdy.ai/api/search-image?query=A%20cheerful%20middle-aged%20man%20in%20business%20attire%20buying%20a%C3%A7a%C3%AD%20at%20a%20colorful%20tropical%20street%20stand%2C%20bright%20Costa%20Verde%20beach%20town%20background%20with%20palm%20trees%20and%20colonial%20architecture%2C%20warm%20sunny%20lighting%2C%20people%20walking%20around%2C%20vibrant%20colors%2C%20friendly%20atmosphere%2C%20documentary%20photography%20style&width=400&height=250&seq=sofofoca1&orientation=landscape"
  },
  {
    id: 4,
    title: "Vereador esquece microfone ligado e cantarola sertanejo durante sessão",
    excerpt: "O homem estava no maior 'Ai se eu te pego' achando que ninguém ouvia! 🎵",
    date: "2h atrás",
    image: "https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20politician%20at%20a%20microphone%20in%20a%20government%20chamber%2C%20singing%20and%20looking%20embarrassed%2C%20warm%20lighting%2C%20Brazilian%20municipal%20building%20interior%2C%20colorful%20and%20humorous%20atmosphere&width=400&height=250&seq=sofofoca2&orientation=landscape"
  },
  {
    id: 5,
    title: "Dono de pousada é flagrado dando comida para sagui no café da manhã",
    excerpt: "Os hóspedes adoraram, mas o sagui virou cliente fixo!",
    date: "4h atrás",
    image: "https://readdy.ai/api/search-image?query=Small%20monkey%20eating%20at%20a%20breakfast%20table%20in%20a%20charming%20Brazilian%20pousada%2C%20guests%20laughing%20in%20the%20background%2C%20tropical%20morning%20scene%20with%20colorful%20fruits%20and%20warm%20sunlight&width=400&height=250&seq=sofofoca3&orientation=landscape"
  },
  {
    id: 12,
    title: "Secretário municipal perde aposta e tem que usar fantasia de sereia",
    excerpt: "Prometeu que se o time perdesse, usaria fantasia. E cumpriu a palavra!",
    date: "1 dia atrás",
    image: "https://readdy.ai/api/search-image?query=Government%20official%20wearing%20a%20mermaid%20costume%20in%20a%20Brazilian%20municipal%20building%2C%20colleagues%20laughing%20in%20the%20background%2C%20colorful%20and%20humorous%20scene%2C%20warm%20lighting%2C%20playful%20atmosphere&width=400&height=250&seq=sofofoca4&orientation=landscape"
  },
  {
    id: 13,
    title: "Delegado é flagrado comprando flores para esposa em horário de trabalho",
    excerpt: "Amor não tem hora! Mas será que não tinha criminoso para prender? 😅",
    date: "1 dia atrás", 
    image: "https://readdy.ai/api/search-image?query=Police%20officer%20in%20uniform%20buying%20flowers%20at%20a%20flower%20shop%2C%20romantic%20gesture%2C%20tropical%20town%20setting%20with%20colorful%20buildings%2C%20warm%20natural%20lighting%2C%20charming%20and%20endearing%20moment&width=400&height=250&seq=sofofoca5&orientation=landscape"
  },
  {
    id: 14,
    title: "Juíza é vista fazendo compras no supermercado usando chinelos",
    excerpt: "Todo mundo tem direito ao conforto! Até quem usa toga no trabalho!",
    date: "2 dias atrás",
    image: "https://readdy.ai/api/search-image?query=Professional%20woman%20casually%20dressed%20shopping%20at%20a%20supermarket%20wearing%20flip-flops%2C%20relaxed%20atmosphere%2C%20Brazilian%20grocery%20store%20interior%2C%20natural%20lighting%2C%20everyday%20life%20moment&width=400&height=250&seq=sofofoca6&orientation=landscape"
  }
];

export default function SoFofocaPage() {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <Header />
      
      <main className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link href="/" className="text-[#FF6E3C] hover:text-[#1D5B4F] transition-colors flex items-center">
              <i className="ri-arrow-left-line mr-2"></i>
              Voltar para o início
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D5B4F] mb-6">
              Só Fofoca 👑
            </h1>
            <p className="text-xl text-[#1D5B4F]/70 max-w-3xl mx-auto leading-relaxed">
              Aqui é onde a Tia da Notícia conta tudo que rolou de mais interessante na nossa Costa Verde! 
              As melhores fofocas, sempre com carinho e bom humor! 💕
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soFofocaArticles.map((article) => (
              <Link key={article.id} href={`/artigo/${article.id}`}>
                <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#FF6E3C] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                        SÓ FOFOCA
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-[#1D5B4F] mb-3 line-clamp-2 hover:text-[#FF6E3C] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#1D5B4F]/70 text-sm leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#1D5B4F]/60">
                      <span className="font-medium">Tia da Notícia</span>
                      <span suppressHydrationWarning={true}>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-[#FDF3E7] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1D5B4F] mb-4">
                Fique por dentro! 📱
              </h2>
              <p className="text-[#1D5B4F]/70 mb-6 max-w-2xl mx-auto">
                A Tia da Notícia está sempre de olho em tudo que acontece na Costa Verde. 
                Tem alguma fofoca boa para compartilhar? Manda para a gente!
              </p>
              <Link href="/contato">
                <button className="bg-[#FF6E3C] text-white px-8 py-3 rounded-full hover:bg-[#1D5B4F] transition-colors font-medium whitespace-nowrap">
                  Contar uma Fofoca
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}