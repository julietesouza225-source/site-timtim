
import { Suspense } from 'react';
import ArticleContent from './ArticleContent';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' }
  ];
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FFF7ED] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6E3C] mx-auto mb-4"></div>
          <p className="text-[#1D5B4F]">Carregando artigo...</p>
        </div>
      </div>
    }>
      <ArticleContent articleId={id} />
    </Suspense>
  );
}
