'use client';
import Link from 'next/link';

const featuredArticles = [
  {
    id: 1,
    title: "Prefeito de Paraty é flagrado comprando açaí no horário de trabalho",
    excerpt: "A Tia da Notícia não deixa passar! Flagramos o prefeito na fila do açaí durante expediente. Será que estava em reunião de trabalho? 🤔",
    image: "https://readdy.ai/api/search-image?query=A%20cheerful%20middle-aged%20man%20in%20business%20attire%20buying%20a%C3%A7a%C3%AD%20at%20a%20colorful%20tropical%20street%20stand%2C%20bright%20Costa%20Verde%20beach%20town%20background%20with%20palm%20trees%20and%20colonial%20architecture%2C%20warm%20sunny%20lighting%2C%20people%20walking%20around%2C%20vibrant%20colors%2C%20friendly%20atmosphere%2C%20documentary%20photography%20style&width=400&height=250&seq=featured1&orientation=landscape",
    category: "SÓ FOFOCA",
    date: "Hoje, 14:30",
    author: "Tia da Notícia"
  },
  {
    id: 2,
    title: "Festa na praia de Angra termina em confusão por causa de som alto",
    excerpt: "Vizinhos reclamaram, polícia foi chamada e no final todo mundo acabou dançando junto. Só na Costa Verde mesmo! 🏖️",
    image: "https://readdy.ai/api/search-image?query=Beach%20party%20at%20sunset%20with%20people%20dancing%20and%20music%20equipment%2C%20Angra%20dos%20Reis%20coastline%20with%20mountains%2C%20warm%20golden%20lighting%2C%20tropical%20beach%20setting%2C%20colorful%20party%20decorations%2C%20joyful%20atmosphere%2C%20documentary%20style%20photography&width=400&height=250&seq=featured2&orientation=landscape",
    category: "Aconteceu na praça",
    date: "Ontem, 20:15",
    author: "Tia da Notícia"
  },
  {
    id: 3,
    title: "Influencer carioca é vista fazendo compras no mercadinho de Trindade",
    excerpt: "E não é que ela pediu desconto no quilo da banana? A Tia não perdeu essa! Celebridade também faz economia 💰",
    image: "https://readdy.ai/api/search-image?query=Young%20fashionable%20woman%20shopping%20at%20a%20small%20colorful%20local%20market%2C%20tropical%20village%20setting%20with%20fresh%20fruits%20and%20vegetables%2C%20friendly%20local%20vendors%2C%20warm%20natural%20lighting%2C%20authentic%20Brazilian%20small%20town%20atmosphere&width=400&height=250&seq=featured3&orientation=landscape",
    category: "Caiu na rede",
    date: "Ontem, 16:45",
    author: "Tia da Notícia"
  }
];

export default function FeaturedArticles() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D5B4F] mb-4">
            Últimas Fofocas
          </h2>
          <p className="text-lg text-[#1D5B4F]/70 max-w-2xl mx-auto">
            A Tia da Notícia não perde nada! Fique por dentro de tudo que acontece na Costa Verde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/artigo/${article.id}`}>
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FF6E3C] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1D5B4F] mb-3 line-clamp-2 hover:text-[#FF6E3C] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#1D5B4F]/70 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#1D5B4F]/60">
                    <span className="font-medium">{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}