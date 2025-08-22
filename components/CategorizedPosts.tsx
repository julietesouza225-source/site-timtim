'use client';
import Link from 'next/link';
import { useState } from 'react';

const categories = ["SÓ FOFOCA", "Caiu na rede", "Tô de olho", "Aconteceu na praça"];

const posts = {
  "SÓ FOFOCA": [
    {
      id: 4,
      title: "Vereador esquece microfone ligado e cantarola sertanejo durante sessão",
      excerpt: "O homem estava no maior 'Ai se eu te pego' achando que ninguém ouvia! 🎵",
      time: "2h atrás",
      image: "https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20politician%20at%20a%20microphone%20in%20a%20government%20chamber%2C%20singing%20and%20looking%20embarrassed%2C%20warm%20lighting%2C%20Brazilian%20municipal%20building%20interior%2C%20colorful%20and%20humorous%20atmosphere&width=300&height=200&seq=cat1&orientation=landscape"
    },
    {
      id: 5,
      title: "Dono de pousada é flagrado dando comida para sagui no café da manhã",
      excerpt: "Os hóspedes adoraram, mas o sagui virou cliente fixo!",
      time: "4h atrás",
      image: "https://readdy.ai/api/search-image?query=Small%20monkey%20eating%20at%20a%20breakfast%20table%20in%20a%20charming%20Brazilian%20pousada%2C%20guests%20laughing%20in%20the%20background%2C%20tropical%20morning%20scene%20with%20colorful%20fruits%20and%20warm%20sunlight&width=300&height=200&seq=cat2&orientation=landscape"
    }
  ],
  "Caiu na rede": [
    {
      id: 6,
      title: "Turista grava vídeo tentando pronunciar 'Parati' e vira meme",
      excerpt: "Coitado, tentou 15 vezes e não conseguiu! Mas o esforço foi lindo 😂",
      time: "1h atrás",
      image: "https://readdy.ai/api/search-image?query=Tourist%20struggling%20to%20pronounce%20Portuguese%20words%20while%20recording%20a%20video%20in%20Paraty%20historic%20center%2C%20colonial%20architecture%20background%2C%20funny%20and%20endearing%20moment%2C%20warm%20golden%20lighting&width=300&height=200&seq=cat3&orientation=landscape"
    },
    {
      id: 7,
      title: "Selfie de casal na Ilha Grande tem photobomb de boto",
      excerpt: "O boto apareceu na hora certa! Foto do ano garantida!",
      time: "6h atrás",
      image: "https://readdy.ai/api/search-image?query=Couple%20taking%20a%20selfie%20on%20a%20beautiful%20beach%20in%20Ilha%20Grande%20with%20a%20dolphin%20jumping%20in%20the%20background%2C%20crystal%20clear%20water%2C%20tropical%20paradise%20setting%2C%20magical%20moment%20captured&width=300&height=200&seq=cat4&orientation=landscape"
    }
  ],
  "Tô de olho": [
    {
      id: 8,
      title: "Nova lanchonete promete 'melhor sanduíche da Costa Verde'",
      excerpt: "Será que é mesmo? A Tia vai testar e depois conta pra vocês!",
      time: "3h atrás",
      image: "https://readdy.ai/api/search-image?query=New%20colorful%20sandwich%20shop%20opening%20in%20a%20Costa%20Verde%20town%2C%20delicious%20looking%20sandwiches%20on%20display%2C%20cheerful%20owners%2C%20tropical%20street%20setting%20with%20palm%20trees%20and%20bright%20colors&width=300&height=200&seq=cat5&orientation=landscape"
    },
    {
      id: 9,
      title: "Movimento suspeito: muita gente bonita chegando em Angra",
      excerpt: "Será que tem filmagem rolando? Ou é só coincidência?",
      time: "5h atrás",
      image: "https://readdy.ai/api/search-image?query=Attractive%20people%20arriving%20at%20Angra%20dos%20Reis%20marina%20with%20yachts%20and%20boats%2C%20glamorous%20atmosphere%2C%20beautiful%20coastal%20scenery%2C%20mysterious%20and%20intriguing%20mood&width=300&height=200&seq=cat6&orientation=landscape"
    }
  ],
  "Aconteceu na praça": [
    {
      id: 10,
      title: "Feira de artesanato vira palco de apresentação de forró improvisada",
      excerpt: "Começou com um sanfoneiro e terminou com a praça toda dançando!",
      time: "7h atrás",
      image: "https://readdy.ai/api/search-image?query=Spontaneous%20forr%C3%B3%20dance%20performance%20in%20a%20Brazilian%20town%20square%20with%20artisan%20market%2C%20people%20dancing%2C%20accordion%20player%2C%20colorful%20stalls%2C%20joyful%20community%20atmosphere%2C%20warm%20evening%20lighting&width=300&height=200&seq=cat7&orientation=landscape"
    },
    {
      id: 11,
      title: "Cachorro 'adota' banca de jornal e vira mascote oficial",
      excerpt: "Todo dia ele vai lá, deita na sombra e recebe carinho dos clientes!",
      time: "8h atrás",
      image: "https://readdy.ai/api/search-image?query=Friendly%20dog%20lying%20next%20to%20a%20newspaper%20stand%20in%20a%20Brazilian%20town%20square%2C%20people%20petting%20the%20dog%2C%20warm%20community%20scene%2C%20tropical%20setting%20with%20palm%20trees%20and%20colonial%20architecture&width=300&height=200&seq=cat8&orientation=landscape"
    }
  ]
};

export default function CategorizedPosts() {
  const [activeCategory, setActiveCategory] = useState("SÓ FOFOCA");

  return (
    <section className="py-12 bg-[#FDF3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D5B4F] mb-4">
            Mais Fofocas da Costa Verde
          </h2>
          <p className="text-lg text-[#1D5B4F]/70 max-w-2xl mx-auto">
            Escolha sua categoria favorita e fique por dentro de tudo!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-[#FF6E3C] text-white'
                  : 'bg-white text-[#1D5B4F] hover:bg-[#FF6E3C]/10 border-2 border-[#FF6E3C]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts[activeCategory as keyof typeof posts]?.map((post) => (
            <Link key={post.id} href={`/artigo/${post.id}`}>
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 object-cover object-top flex-shrink-0"
                  />
                  <div className="p-4 flex-grow">
                    <h3 className="font-bold text-[#1D5B4F] text-sm leading-snug mb-2 hover:text-[#FF6E3C] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#1D5B4F]/70 text-xs leading-relaxed mb-2">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-[#1D5B4F]/50">{post.time}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href={`/${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}>
            <button className="bg-[#1D5B4F] text-white px-8 py-3 rounded-full hover:bg-[#FF6E3C] transition-colors font-medium whitespace-nowrap">
              Ver todas de "{activeCategory}"
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}