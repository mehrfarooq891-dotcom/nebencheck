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
    if (cat.includes('recht') || cat.includes('ratgeber')) return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200';
    if (cat.includes('nachrichten') || cat.includes('news')) return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200';
    if (cat.includes('heizkosten')) return 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200';
    if (cat.includes('strom')) return 'https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=1200&auto=format&fit=crop';
    if (cat.includes('musterbrief')) return 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200';
    return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'; // Default
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-[#f8f9fa]">
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
                id={post.slug === 'balkonsolar-mieter-ratgeber' ? 'solar-card' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="blog-card"
              >
                {/* Top: Header Section (Gradient or Image fallback) */}
                <div className="card-header-gradient">
                    <span className="emoji">
                      {post.category === 'STROMKOSTEN' ? '☀️' : 
                       post.category === 'SOLARTECHNIK' ? '⚡' : 
                       post.category === 'WIRTSCHAFTLICHKEIT' ? '📈' : '🔋'}
                    </span>
                    <p className="title-tag">{post.category.replace('_', ' ')}</p>
                </div>

                <div className="card-content">
                  {/* Category Tag */}
                  <span className="category-tag">
                    {post.category}
                  </span>
                  
                  {/* Read Time Info */}
                  <p className="read-time-info">
                    📖 {post.readTime.toUpperCase()} LESEZEIT
                  </p>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h2>{post.title}</h2>
                  </Link>

                  {/* Description */}
                  <p className="desc line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Action Button */}
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">
                    Weiterlesen
                  </Link>
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
