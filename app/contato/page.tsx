
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://kdismzegwnxdmoysixcr.supabase.co/functions/v1/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      } else {
        setErrorMessage(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-[#FDF3E7]">
      <Header />

      <main>
        <section className="py-16 bg-gradient-to-br from-[#007487] to-[#1D5B4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fale com a Tia! 
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tem alguma fofoca pra contar? Quer sugerir um assunto? Entre em contato!
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1D5B4F] mb-6">
                  Entre em Contato
                </h2>
                <p className="text-[#1D5B4F]/70 mb-8">
                  Tem uma fofoca quente? Viu algo interessante na Costa Verde? 
                  Manda pra Tia que ela não perde essa! Todas as dicas são bem-vindas!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#F56E87] rounded-full flex items-center justify-center">
                      <i className="ri-instagram-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D5B4F]">Instagram</h3>
                      <p className="text-[#1D5B4F]/70">@timtimcostaverde</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#FF6E3C] rounded-full flex items-center justify-center">
                      <i className="ri-mail-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D5B4F]">Email</h3>
                      <p className="text-[#1D5B4F]/70">tiadanoticia@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#007487] rounded-full flex items-center justify-center">
                      <i className="ri-map-pin-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1D5B4F]">Localização</h3>
                      <p className="text-[#1D5B4F]/70">Costa Verde, RJ - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#FFDF5A]/20 rounded-xl">
                  <h3 className="font-bold text-[#1D5B4F] mb-2">
                    Dica da Tia:
                  </h3>
                  <p className="text-[#1D5B4F]/70 text-sm">
                    Para mandar fofocas quentes, use o Instagram ou e-mail! 
                    Resposta garantida em até 24 horas (a não ser que a Tia esteja ocupada com alguma fofoca quente )
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-[#1D5B4F] mb-6">
                  Mande sua Mensagem
                </h2>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                    <p className="text-green-700">
                      Mensagem enviada! A Tia vai responder em breve!
                    </p>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                    <p className="text-red-700">
                      {errorMessage}
                    </p>
                  </div>
                )}

                <form id="contato-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-[#1D5B4F] mb-2">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6E3C] focus:border-transparent text-sm disabled:bg-gray-100"
                      placeholder="Como a Tia deve te chamar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1D5B4F] mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6E3C] focus:border-transparent text-sm disabled:bg-gray-100"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-[#1D5B4F] mb-2">
                      Assunto
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6E3C] focus:border-transparent text-sm pr-8 disabled:bg-gray-100"
                    >
                      <option value="">Escolha o assunto</option>
                      <option value="fofoca"> Tenho uma fofoca!</option>
                      <option value="sugestao"> Sugestão de pauta</option>
                      <option value="elogio"> Elogio</option>
                      <option value="critica"> Crítica construtiva</option>
                      <option value="parcerias"> Parcerias</option>
                      <option value="outros"> Outros assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-[#1D5B4F] mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      maxLength={500}
                      rows={5}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6E3C] focus:border-transparent text-sm resize-none disabled:bg-gray-100"
                      placeholder="Conta tudo pra Tia! (máximo 500 caracteres)"
                    ></textarea>
                    <p className="text-xs text-[#1D5B4F]/60 mt-1">
                      {formData.mensagem.length}/500 caracteres
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={formData.mensagem.length > 500 || isSubmitting}
                    className="w-full bg-[#FF6E3C] text-white py-3 px-6 rounded-lg hover:bg-[#F56E87] transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
