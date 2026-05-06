import React from 'react';
import { Layout } from '../components/layout/Layout';
import { BLOG_POSTS } from '../lib/blog-data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Blog: React.FC = () => {
  const getCategoryFallbackImage = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('recht')) return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800';
    if (cat.includes('news')) return 'https://images.unsplash.com/photo-1504711432869-5d39a130f48b?auto=format&fit=crop&q=80&w=800';
    if (cat.includes('heizkosten')) return 'https://images.unsplash.com/photo-1585144152881-42179ec35661?auto=format&fit=crop&q=80&w=800';
    if (cat.includes('musterbrief')) return 'https://images.unsplash.com/photo-1586762522614-912c81921c7b?auto=format&fit=crop&q=80&w=800';
    return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'; // Default for Ratgeber
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-text mb-6">
              Wissen ist <span className="text-primary">Mieterschutz</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Aktuelle Ratgeber, tiefgreifende Analysen und praktische Tipps rund um das Thema Nebenkosten und Mietrecht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
              >
                {/* Top: Image */}
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-video">
                  <img 
                    src={post.imageUrl || getCategoryFallbackImage(post.category)} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>

                <div className="p-8 flex-grow flex flex-col">
                  {/* Category Link */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-light text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted font-medium flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`} className="block mb-4">
                    <h2 className="text-2xl font-bold font-serif group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="text-muted leading-relaxed mb-6 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Bottom: Author + Date + Read more */}
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text">{post.author}</span>
                      <span className="text-[10px] text-muted flex items-center gap-1 mt-0.5">
                        <Calendar className="w-2.5 h-2.5" /> {post.date}
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn h-8 px-3 rounded-xl hover:bg-primary hover:text-white transition-all">
                        Lesen <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Keine Update verpassen?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Abonniere Julian Beckers Mieter-Update und bleibe rechtlich immer auf dem Laufenden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Deine E-Mail" 
                className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:bg-white/20 transition-all font-bold"
              />
              <Button variant="secondary" size="lg" className="h-14">Abonnieren</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
