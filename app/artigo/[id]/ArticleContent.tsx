
'use client';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface ArticleContentProps {
  articleId: string;
}

export default function ArticleContent({ articleId }: ArticleContentProps) {
  const articles: { [key: string]: any } = {
    '1': {
      title: "Prefeito de Paraty é flagrado comprando açaí no horário de trabalho",
      category: "SÓ FOFOCA",
      date: "Hoje, 14:30",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=A%20cheerful%20middle-aged%20man%20in%20business%20attire%20buying%20a%C3%A7a%C3%AD%20at%20a%20colorful%20tropical%20street%20stand%2C%20bright%20Costa%20Verde%20beach%20town%20background%20with%20palm%20trees%20and%20colonial%20architecture%2C%20warm%20sunny%20lighting%2C%20people%20walking%20around%2C%20vibrant%20colors%2C%20friendly%20atmosphere%2C%20documentary%20photography%20style&width=800&height=500&seq=article1&orientation=landscape",
      content: `
        <p>Gente, a Tia não acredita no que viu hoje! Estava ali na pracinha quando vi uma cena que não podia deixar passar...</p>
        
        <p>Nosso querido prefeito, aquele mesmo que sempre fala sobre dedicação ao trabalho, estava lá na fila do açaí mais famoso da cidade! E olha, não era nem hora do almoço, não! Era umas 3 da tarde, bem no meio do expediente!</p>
        
        <p>O homem chegou de carro oficial, desceu todo sorridente e foi direto para a fila. Pediu um açaí caprichado, com banana, granola, leite condensado... o cardápio completo! Ainda conversou com o pessoal, tirou selfie e tudo!</p>
        
        <p>Olha, eu não julgo ninguém por querer um açaí gostoso, mas será que não tinha uma reunião importante esperando? </p>
        
        <p>O povo que estava na fila adorou a descontração do prefeito. Uma senhora até brincou: "Pelo menos ele conhece os comércios locais!" </p>
        
        <p>No final das contas, foi um momento descontraído e o prefeito mostrou que também é gente como a gente. Só espero que tenha voltado pro trabalho depois do açaí!</p>
      `
    },
    '2': {
      title: "Festa na praia de Angra termina em confusão por causa de som alto",
      category: "Aconteceu na praça",
      date: "Ontem, 20:15",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Beach%20party%20at%20sunset%20with%20people%20dancing%20and%20music%20equipment%2C%20Angra%20dos%20Reis%20coastline%20with%20mountains%2C%20warm%20golden%20lighting%2C%20tropical%20beach%20setting%2C%20colorful%20party%20decorations%2C%20joyful%20atmosphere%2C%20documentary%20style%20photography&width=800&height=500&seq=article2&orientation=landscape",
      content: `
        <p>Ai, meu Deus! Que confusão foi essa na praia de Angra ontem à noite! A Tia ficou sabendo de tudo pelos vizinhos que não paravam de mandar mensagem!</p>
        
        <p>Começou tudo com uma festinha na praia. Pessoal jovem, música boa, aquela vibe gostosa de final de semana. Até aí, tudo normal, né?</p>
        
        <p>Só que o som foi subindo, subindo, subindo... e quando foi umas 8 da noite, os vizinhos começaram a reclamar. Primeiro mandaram recado, depois foram lá conversar, mas o pessoal da festa não queria saber de diminuir o volume.</p>
        
        <p>Resultado? Alguém chamou a polícia! Quando os policiais chegaram, pensaram que ia dar problema, mas olha só que reviravolta...</p>
        
        <p>Os policiais chegaram, conversaram com todo mundo, e de repente... começaram a dançar também!  Um dos PMs até falou: "Se não pode com eles, junte-se a eles!"</p>
        
        <p>No final, vizinhos, festeiros e polícia, todo mundo junto dançando na areia! Diminuíram o som um pouquinho e a festa continuou até mais tarde, mas agora com todo mundo participando!</p>
        
        <p>Só mesmo na Costa Verde para transformar uma confusão numa festa ainda maior! </p>
      `
    },
    '3': {
      title: "Influencer carioca é vista fazendo compras no mercadinho de Trindade",
      category: "Caiu na rede",
      date: "Ontem, 16:45", 
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Young%20fashionable%20woman%20shopping%20at%20a%20small%20colorful%20local%20market%2C%20tropical%20village%20setting%20with%20fresh%20fruits%20and%20vegetables%2C%20friendly%20local%20vendors%2C%20warm%20natural%20lighting%2C%20authentic%20Brazilian%20small%20town%20atmosphere&width=800&height=500&seq=article3&orientation=landscape",
      content: `
        <p>Gente, vocês não vão acreditar em quem a Tia viu hoje no mercadinho do seu João em Trindade! Uma influencer famosa do Rio, aquela que tem mais de 500 mil seguidores no Instagram!</p>
        
        <p>A moça chegou toda produzida, mas super simpática. Cumprimentou todo mundo, perguntou sobre os produtos locais... uma gracinha!</p>
        
        <p>Mas o melhor foi quando ela chegou na balança da banana! Seu João falou o preço e ela, na maior naturalidade, perguntou: "Ah, mas não tem um desconto para cliente fiel?" </p>
        
        <p>O pessoal que estava no mercadinho morreu de rir! Ela mesma começou a rir e falou: "Gente, desculpa, é mania carioca mesmo! Onde tem desconto, a gente pede!"</p>
        
        <p>No final, seu João até deu um desconto simbólico e ela ficou super feliz. Comprou frutas, pão, queijo... disse que ia fazer um café da manhã especial na pousada onde está hospedada.</p>
        
        <p>Ainda tirou foto com todo mundo do mercadinho e prometeu postar nos stories! O povo ficou famoso! </p>
        
        <p>Adorei ver como ela foi receptiva com nossa comunidade. Celebridade com os pés no chão é sempre bem-vinda na Costa Verde! </p>
      `
    },
    '4': {
      title: "Vereador esquece microfone ligado e cantarola sertanejo durante sessão",
      category: "SÓ FOFOCA",
      date: "2h atrás",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Funny%20moment%20of%20a%20politician%20at%20a%20microphone%20in%20a%20government%20chamber%2C%20singing%20and%20looking%20embarrassed%2C%20warm%20lighting%2C%20Brazilian%20municipal%20building%20interior%2C%20colorful%20and%20humorous%20atmosphere&width=800&height=500&seq=article4&orientation=landscape",
      content: `
        <p>Gente, pelo amor! A Tia quase morreu de rir com o que aconteceu hoje na Câmara Municipal! </p>
        
        <p>Nosso vereador querido, aquele que sempre se faz de sério nas sessões, esqueceu o microfone ligado durante um intervalo e começou a cantarolar "Ai se eu te pego" do Michel Teló!</p>
        
        <p>O homem estava ali, achando que ninguém estava ouvindo, e mandou a voz! Cantou o refrão inteiro, ainda fez uma dancinha na cadeira... uma gracinha! </p>
        
        <p>O pessoal da galeria começou a rir, outros vereadores tentavam chamar atenção dele, mas ele estava no mundo da lua! Só parou quando o presidente da mesa fez sinal para ele olhar o microfone!</p>
        
        <p>Ficou vermelho que nem um pimentão! Mas pelo menos mostrou que tem bom gosto musical! O povo adorou a espontaneidade!</p>
        
        <p>Depois da sessão, ele veio conversar com todo mundo e falou: "Vocês viram que eu não perco o ritmo nem trabalhando!" </p>
        
        <p>A Tia adorou! Político descontraído é sempre melhor que político carrancudo! </p>
      `
    },
    '5': {
      title: "Dono de pousada é flagrado dando comida para sagui no café da manhã",
      category: "SÓ FOFOCA", 
      date: "4h atrás",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Small%20monkey%20eating%20at%20a%20breakfast%20table%20in%20a%20charming%20Brazilian%20pousada%2C%20guests%20laughing%20in%20the%20background%2C%20tropical%20morning%20scene%20with%20colorful%20fruits%20and%20warm%20sunlight&width=800&height=500&seq=article5&orientation=landscape",
      content: `
        <p>Ai que coisa mais fofa! A Tia ficou sabendo de uma história que derreteu meu coração aqui na pousada do Zé Carlos! </p>
        
        <p>Imaginem a cena: os hóspedes todos sentadinhos tomando café da manhã, aquela mesa farta com frutas, pães, sucos... quando aparece um sagui na varanda!</p>
        
        <p>O bichinho chegou mansinho, olhando com aquela carinha de quem está morrendo de fome. O Zé Carlos, que tem um coração gigante, não resistiu!</p>
        
        <p>Pegou um pedacinho de banana e ofereceu para o sagui. Gente, o bichinho aceitou na maior educação! Sentou na mesa igual gente grande! </p>
        
        <p>Os hóspedes ficaram encantados! Todo mundo tirando foto, fazendo vídeo... o sagui posando igual modelo profissional!</p>
        
        <p>Mas o melhor é que agora ele aparece todo dia no mesmo horário! Virou cliente fixo da pousada! O Zé Carlos até brincou: "Vou ter que cobrar taxa de sagui!" </p>
        
        <p>Essa é a magia da Costa Verde: onde até os bichinhos fazem parte da família! </p>
      `
    },
    '6': {
      title: "Turista grava vídeo tentando pronunciar 'Parati' e vira meme",
      category: "Caiu na rede",
      date: "1h atrás",
      author: "Tia da Notícia", 
      image: "https://readdy.ai/api/search-image?query=Tourist%20struggling%20to%20pronounce%20Portuguese%20words%20while%20recording%20a%20video%20in%20Paraty%20historic%20center%2C%20colonial%20architecture%20background%2C%20funny%20and%20endearing%20moment%2C%20warm%20golden%20lighting&width=800&height=500&seq=article6&orientation=landscape",
      content: `
        <p>Gente, que turista mais fofo! A Tia viu um vídeo que está circulando e quase chorei de rir! </p>
        
        <p>Um gringo super simpático estava tentando gravar um stories no centro histórico de Paraty, mas não conseguia pronunciar o nome da cidade!</p>
        
        <p>O coitado falava "Pa-RA-ti", "Pa-ra-TI", "PA-rati"... tentou pelo menos 15 vezes! A cada tentativa, ele ria mais e ficava mais nervoso!</p>
        
        <p>O povo que estava passando começou a ajudar, todo mundo falando junto: "Pa-ra-CHI!" Mas ele não conseguia pegar o jeito do nosso "ti" que vira "chi"!</p>
        
        <p>No final, ele desistiu e falou em inglês: "This beautiful place that I can't pronounce!" Todo mundo morreu de rir! </p>
        
        <p>O vídeo viralizou! Já tem mais de 100 mil visualizações! Os comentários são uma graça: todo mundo ensinando como fala e elogiando o esforço dele!</p>
        
        <p>Essa é a simpatia do nosso povo: sempre disposto a ajudar, mesmo quando é para ensinar a falar o nome da nossa cidade! </p>
      `
    },
    '7': {
      title: "Selfie de casal na Ilha Grande tem photobomb de boto",
      category: "Caiu na rede",
      date: "6h atrás", 
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Couple%20taking%20a%20selfie%20on%20a%20beautiful%20beach%20in%20Ilha%20Grande%20with%20a%20dolphin%20jumping%20in%20the%20background%2C%20crystal%20clear%20water%2C%20tropical%20paradise%20setting%2C%20magical%20moment%20captured&width=800&height=500&seq=article7&orientation=landscape",
      content: `
        <p>Que momento mágico! A Tia ficou emocionada com essa foto que está rodando as redes sociais! </p>
        
        <p>Um casal de turistas estava curtindo o dia na Ilha Grande, naquela praia paradisíaca com águinha cristalina... vocês sabem qual é!</p>
        
        <p>Eles resolveram tirar uma selfie romântica, aquela foto clássica de casal apaixonado com o mar de fundo. Até aí, nada demais, né?</p>
        
        <p>Mas olha só que presente da natureza! Na hora exata que eles clicaram, um boto saltou bem atrás deles! Parecia até combinado! </p>
        
        <p>A menina só percebeu depois quando foi olhar a foto. Gritou tanto de emoção que o pessoal da praia toda correu para ver o que tinha acontecido!</p>
        
        <p>O namorado falou: "Amor, esse é o sinal de que temos que voltar sempre!" E ela: "Boto é sorte no amor!" </p>
        
        <p>Foto do ano garantida! Já pensaram na inveja que vão dar nos amigos? A natureza da nossa Costa Verde é realmente espetacular! </p>
      `
    },
    '8': {
      title: "Nova lanchonete promete 'melhor sanduíche da Costa Verde'",
      category: "Tô de olho",
      date: "3h atrás",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=New%20colorful%20sandwich%20shop%20opening%20in%20a%20Costa%20Verde%20town%2C%20delicious%20looking%20sandwiches%20on%20display%2C%20cheerful%20owners%2C%20tropical%20street%20setting%20with%20palm%20trees%20and%20bright%20colors&width=800&height=500&seq=article8&orientation=landscape", 
      content: `
        <p>Atenção, galera da Costa Verde! Tem novidade na praça! Abriu uma lanchonete nova aqui perto e a dona está prometendo o "melhor sanduíche da região"! </p>
        
        <p>A Dona Maria, que veio lá de Minas Gerais, trouxe receitas de família e está fazendo um barulho! O cardápio tem opções de dar água na boca!</p>
        
        <p>Tem sanduíche de pernil com abacaxi, hambúrguer artesanal com queijo da serra, sanduíche de linguiça calabresa... Gente, só de falar já fiquei com fome! </p>
        
        <p>Mas a especialidade da casa é o "Sanduíchão da Costa": pão caseiro, carne desfiada, queijo coalho, tomate, alface e um molho secreto que ela não conta a receita para ninguém!</p>
        
        <p>A Tia já está de olho! Vou lá testar essa maravilha toda e depois volto para contar se é verdade mesmo esse título de "melhor sanduíche"!</p>
        
        <p>Quem mais topa fazer esse teste comigo? Vamos dar uma força para o comércio local! </p>
      `
    },
    '9': {
      title: "Movimento suspeito: muita gente bonita chegando em Angra",
      category: "Tô de olho", 
      date: "5h atrás",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Attractive%20people%20arriving%20at%20Angra%20dos%20Reis%20marina%20with%20yachts%20and%20boats%2C%20glamorous%20atmosphere%2C%20beautiful%20coastal%20scenery%2C%20mysterious%20and%20intriguing%20mood&width=800&height=500&seq=article9&orientation=landscape",
      content: `
        <p>Gente, a Tia está com o radar ligado! Tem coisa estranha acontecendo em Angra dos Reis! </p>
        
        <p>Desde ontem, não para de chegar gente bonita no porto! E quando eu digo bonita, é MUITO bonita mesmo! Parece elenco de novela!</p>
        
        <p>Todo mundo chegando de iate, de lancha, com aquelas malas chiques... e o pessoal do porto comentando que nunca viram tanto movimento glamouroso assim de uma vez!</p>
        
        <p>Será que tem filmagem rolando? Ensaio fotográfico? Festa de algum famoso? A curiosidade está matando a Tia! </p>
        
        <p>Tentei perguntar para alguns, mas eles são bem discretos. Só sorridem e falam que "está tudo certo". Hmm... suspeito! </p>
        
        <p>Uma coisa eu garanto: seja lá o que for, vai dar o que falar! A Costa Verde sempre foi cenário de coisas incríveis!</p>
        
        <p>Vou continuar investigando e assim que descobrir, vocês serão os primeiros a saber! Fiquem ligados! </p>
      `
    },
    '10': {
      title: "Feira de artesanato vira palco de apresentação de forró improvisada", 
      category: "Aconteceu na praça",
      date: "7h atrás",
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Spontaneous%20forr%C3%B3%20dance%20performance%20in%20a%20Brazilian%20town%20square%20with%20artisan%20market%2C%20people%20dancing%2C%20accordion%20player%2C%20colorful%20stalls%2C%20joyful%20community%20atmosphere%2C%20warm%20evening%20lighting&width=800&height=500&seq=article10&orientation=landscape",
      content: `
        <p>Que alegria foi ontem na pracinha! A Tia ainda está com o coração quentinho lembrando dessa festa espontânea! </p>
        
        <p>Começou tudo na feira de artesanato de sábado. Pessoal vendendo suas coisinhas, turistas comprando lembrancinhas... aquele clima gostoso de sempre!</p>
        
        <p>Aí chegou o Seu Antônio com a sanfona dele, só para animar um pouquinho enquanto vendia os cordéis. Começou com uma musiquinha suave...</p>
        
        <p>Mas quando ele atacou "Asa Branca", gente... foi como se tivesse dado um sinal! O povo todo parou para ouvir!</p>
        
        <p>Primeiro foi a Dona Conceição que começou a rebolar. Depois o pessoal da barraca de tapioca entrou na dança. Em 10 minutos, a praça inteira estava dançando forró! </p>
        
        <p>Até os turistas gringos entraram na roda! Uma alemã ainda perguntou se podia aprender os passos! Todo mundo ensinando, todo mundo rindo!</p>
        
        <p>A festa durou até o anoitecer! Essa é a magia do nosso povo: transforma qualquer momento comum numa celebração inesquecível! </p>
      `
    },
    '11': {
      title: "Cachorro 'adota' banca de jornal e vira mascote oficial",
      category: "Aconteceu na praça",
      date: "8h atrás", 
      author: "Tia da Notícia",
      image: "https://readdy.ai/api/search-image?query=Friendly%20dog%20lying%20next%20to%20a%20newspaper%20stand%20in%20a%20Brazilian%20town%20square%2C%20people%20petting%20the%20dog%2C%20warm%20community%20scene%2C%20tropical%20setting%20with%20palm%20trees%20and%20colonial%20architecture&width=800&height=500&seq=article11&orientation=landscape",
      content: `
        <p>Que história mais doce! A Tia se emocionou com esse case de amor que está acontecendo aqui na nossa pracinha! </p>
        
        <p>Vocês conhecem o Seu Roberto, dono da banca de jornal? Pois é, ele ganhou um companheiro fiel que ninguém esperava!</p>
        
        <p>Há uns 15 dias, apareceu um cachorro vira-lata, daqueles caramelos lindos, que se aconchegou na sombra da banca. O Seu Roberto, com o coração mole, deu água e um pedacinho de pão.</p>
        
        <p>Gente, desde então o bichinho não saiu mais de lá! Todo dia, no mesmo horário que a banca abre, ele aparece e deita no cantinho dele!</p>
        
        <p>O mais lindo é que ele virou recepcionista oficial! Cumprimenta todo cliente com o rabinho balançando, aceita carinho de todo mundo... uma simpatia só! </p>
        
        <p>O pessoal já apelidou ele de "Notícias"! E o Seu Roberto está radiante: "Nunca pensei que ia ter um funcionário tão dedicado!" </p>
        
        <p>Essa é a prova de que amor não escolhe espécie! O "Notícias" encontrou sua família, e a banca ganhou o melhor funcionário do mundo! </p>
      `
    }
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FFF7ED] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1D5B4F] mb-4">Artigo não encontrado</h1>
          <Link href="/" className="text-[#FF6E3C] hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <Header />
      
      <main className="pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link href="/" className="text-[#FF6E3C] hover:text-[#1D5B4F] transition-colors flex items-center">
              <i className="ri-arrow-left-line mr-2"></i>
              Voltar para o início
            </Link>
          </div>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-[#FF6E3C] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1D5B4F] mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F56E87] to-[#FF6E3C] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TN</span>
                </div>
                <div>
                  <p className="font-medium text-[#1D5B4F]">{article.author}</p>
                  <p className="text-sm text-[#1D5B4F]/60" suppressHydrationWarning={true}>{article.date}</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-[#1D5B4F]/80 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-[#F56E87] text-white px-4 py-2 rounded-full hover:bg-[#F56E87]/80 transition-colors">
                      <i className="ri-heart-line"></i>
                      <span>Curtir</span>
                    </button>
                    <button className="flex items-center space-x-2 text-[#1D5B4F] hover:text-[#F56E87] transition-colors">
                      <i className="ri-chat-3-line"></i>
                      <span>Comentar</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 bg-[#FFDF5A] text-[#1D5B4F] px-4 py-2 rounded-full hover:bg-[#F56E87] hover:text-white transition-colors">
                    <i className="ri-whatsapp-line"></i>
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#1D5B4F] mb-6">Mais Fofocas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link href="/artigo/2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Beach%20party%20at%20sunset%20with%20people%20dancing%20and%20music%20equipment%2C%20Angra%20dos%20Reis%20coastline%20with%20mountains%2C%20warm%20golden%20lighting%2C%20tropical%20beach%20setting%2C%20colorful%20party%20decorations%2C%20joyful%20atmosphere%2C%20documentary%20style%20photography&width=400&height=200&seq=related1&orientation=landscape"
                    alt="Festa na praia"
                    className="w-full h-32 object-cover object-top"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-[#1D5B4F] mb-2">Festa na praia de Angra termina em confusão</h4>
                    <p className="text-sm text-[#1D5B4F]/70">Polícia chegou e acabou dançando junto...</p>
                  </div>
                </div>
              </Link>

              <Link href="/artigo/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src="https://readdy.ai/api/search-image?query=Young%20fashionable%20woman%20shopping%20at%20a%20small%20colorful%20local%20market%2C%20tropical%20village%20setting%20with%20fresh%20fruits%20and%20vegetables%2C%20friendly%20local%20vendors%2C%20warm%20natural%20lighting%2C%20authentic%20Brazilian%20small%20town%20atmosphere&width=400&height=200&seq=related2&orientation=landscape"
                    alt="Influencer no mercadinho"
                    className="w-full h-32 object-cover object-top"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-[#1D5B4F] mb-2">Influencer pede desconto no mercadinho</h4>
                    <p className="text-sm text-[#1D5B4F]/70">E ainda conseguiu! Confira essa história...</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
