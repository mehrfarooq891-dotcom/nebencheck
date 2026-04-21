import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { BLOG_POSTS } from '../lib/blog-data';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Printer, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo(() => 
    BLOG_POSTS.find(p => p.slug === slug),
    [slug]
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Breadcrumbs / Back navigation */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-bold text-muted hover:text-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Zur Übersicht
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-muted font-medium">
                {post.readTime} Lesezeit
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-text mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-8 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt={post.author} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-text">{post.author}</div>
                  <div className="text-xs text-muted flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="p-2 border border-gray-100 rounded-xl">
                  <Share2 className="w-4 h-4 text-muted" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 border border-gray-100 rounded-xl">
                  <Printer className="w-4 h-4 text-muted" />
                </Button>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-slate max-w-none mb-20 prose-headings:font-serif prose-headings:font-bold prose-a:text-primary">
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* Social Proof / Trust Section */}
          <section className="bg-surface p-8 md:p-12 rounded-[3rem] border border-gray-100 mb-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-primary uppercase tracking-wider mb-4 border border-primary/10">
                <CheckCircle2 className="w-3 h-3" /> Rechtssicher geprüft
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">
                Lass dich nicht von falschen Abrechnungen täuschen
              </h3>
              <p className="text-muted leading-relaxed">
                Dieser Artikel wurde von Julian Becker nach bestem Gewissen und auf Basis der aktuellen Rechtsprechung (§ 556 BGB) verfasst. Dennoch ersetzt er keine individuelle Rechtsberatung.
              </p>
            </div>
            <Link to="/tool" className="shrink-0">
              <Button size="xl" className="h-16 group">
                Abrechnung prüfen <ArrowLeft className="ml-3 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </section>

          {/* Related Articles could go here */}
        </div>
      </article>
    </Layout>
  );
};
