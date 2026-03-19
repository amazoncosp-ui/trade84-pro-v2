'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Handshake,
  Shield,
  Zap,
  Headphones,
  DollarSign,
  Settings,
  Star,
  Grid3X3,
  MessageCircle,
  Send,
  CheckCircle,
  TrendingUp,
  Menu,
  X,
  Globe,
  ArrowRight,
  CreditCard,
  Building2,
  Wallet,
  Smartphone,
  Banknote,
  CircleDollarSign,
  BadgeCheck,
  BarChart3,
  ExternalLink,
  Clock,
  ChevronUp,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/* ───── Animated Counter ───── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ───── Trade84 Logo SVG ───── */
function Trade84Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
        <linearGradient id="handGrad" x1="10" y1="20" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#e0e7ff"/>
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#logoGrad)"/>
      <path d="M14 28l4-4 3 1 5-5 4 2 4-4" stroke="url(#handGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M14 28c0 0 2 3 5 3s4-2 6-2 3 2 5 2 4-3 4-3" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M10 24l6-2 3 3-4 4-5-2z" fill="#ffffff" opacity="0.9"/>
      <path d="M38 24l-6-2-3 3 4 4 5-2z" fill="#ffffff" opacity="0.9"/>
      <circle cx="24" cy="25" r="3" fill="#fbbf24" opacity="0.9"/>
      <circle cx="36" cy="14" r="2" fill="#fbbf24" opacity="0.6"/>
      <circle cx="12" cy="14" r="1.5" fill="#93c5fd" opacity="0.5"/>
    </svg>
  );
}

/* ───── Floating Payment Icons (Hero decoration) ───── */
function FloatingIcons() {
  const icons = [
    { icon: CreditCard, x: '8%', y: '20%', delay: 0, color: '#0070ba' },
    { icon: Wallet, x: '85%', y: '15%', delay: 0.5, color: '#00d4aa' },
    { icon: Building2, x: '5%', y: '70%', delay: 1, color: '#0033a0' },
    { icon: Smartphone, x: '90%', y: '65%', delay: 1.5, color: '#7C3AED' },
    { icon: Globe, x: '15%', y: '45%', delay: 0.8, color: '#059669' },
    { icon: Banknote, x: '82%', y: '40%', delay: 1.2, color: '#EA580C' },
    { icon: CircleDollarSign, x: '92%', y: '85%', delay: 0.3, color: '#2563eb' },
    { icon: BadgeCheck, x: '3%', y: '88%', delay: 1.8, color: '#0891b2' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.12]"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, repeatType: 'reverse', delay: item.delay }}
        >
          <item.icon className="w-10 h-10" style={{ color: item.color }} />
        </motion.div>
      ))}
    </div>
  );
}

/* ───── Verified Profile Badge Component ───── */
function VerifiedBadge({ platform, url, small = false }: { platform: 'noones' | 'localcoinswap'; url: string; small?: boolean }) {
  const config = {
    noones: { name: 'Noones', gradient: 'from-blue-600 to-indigo-700', letter: 'N', hoverBorder: 'hover:border-blue-300' },
    localcoinswap: { name: 'LocalCoinSwap', gradient: 'from-green-500 to-emerald-700', letter: 'LC', hoverBorder: 'hover:border-green-300' },
  };
  const c = config[platform];

  if (small) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
      >
        <CheckCircle className="w-3.5 h-3.5 text-green-400" />
        {c.name}
        <ExternalLink className="w-3 h-3 opacity-60" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 ${c.hoverBorder} hover:shadow-md transition-all group`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${c.gradient} rounded-xl flex items-center justify-center shadow-md`}>
          <span className="text-white font-extrabold text-lg">{c.letter}</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 text-lg">{c.name}</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Verified
            </span>
          </div>
          <span className="text-sm text-gray-500">View our verified trade history & ratings</span>
        </div>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
    </a>
  );
}

/* ───── Why Trade84 Grid ───── */
function WhyWheel() {
  const points = [
    { icon: Shield, title: 'Trusted Since 2015', desc: 'Operating with an impeccable record for nearly a decade. Thousands of happy partners trust us with their trades every day.', color: '#2563eb', bgLight: '#eff6ff', accent: 'from-blue-500 to-blue-600' },
    { icon: DollarSign, title: 'No Middleman Fees', desc: 'Direct trading with transparent pricing. No hidden charges, no surprises — what you see is what you get.', color: '#d97706', bgLight: '#fffbeb', accent: 'from-amber-500 to-amber-600' },
    { icon: Settings, title: 'Flexible Methods', desc: 'Wide range of amounts and 20+ payment options to suit your exact needs. We adapt to you, not the other way around.', color: '#7c3aed', bgLight: '#f5f3ff', accent: 'from-violet-500 to-purple-600' },
    { icon: Zap, title: 'Instant Response', desc: 'Get replies within minutes on Telegram or WhatsApp. No bots, no queues — real humans who respond fast.', color: '#ea580c', bgLight: '#fff7ed', accent: 'from-orange-500 to-orange-600' },
    { icon: TrendingUp, title: 'Best Rates', desc: 'Competitive rates consistently better than most exchanges. Save more on every single trade you make with us.', color: '#059669', bgLight: '#ecfdf5', accent: 'from-emerald-500 to-green-600' },
    { icon: Headphones, title: 'Personal Support', desc: '24/7 dedicated human support team that actually cares about your experience. We treat every partner like a VIP.', color: '#0891b2', bgLight: '#ecfeff', accent: 'from-cyan-500 to-teal-600' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="group relative bg-white rounded-2xl p-7 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-xl hover:border-blue-200/60 hover:-translate-y-1 transition-all duration-300"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r ${point.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300"
            style={{ backgroundColor: point.bgLight }}
          >
            <point.icon className="w-7 h-7" style={{ color: point.color }} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
          <p className="text-gray-500 text-[15px] leading-relaxed">{point.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ───── Floating Contact Buttons (WhatsApp + Telegram) ───── */
function FloatingContactButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://t.me/Trade84"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="absolute right-[calc(100%+8px)] whitespace-nowrap bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Message on Telegram
        </span>
        <div className="w-14 h-14 rounded-full bg-[#0088cc] shadow-[0_4px_20px_rgba(0,136,204,0.5)] flex items-center justify-center">
          <Send className="w-6 h-6 text-white" />
        </div>
      </motion.a>

      <motion.a
        href="https://wa.me/84362429792"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="absolute right-[calc(100%+8px)] whitespace-nowrap bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
        <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
      </motion.a>
    </div>
  );
}

/* ───── SEPA Logo SVG ───── */
function SepaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="80" rx="8" fill="#003399"/>
      <text x="24" y="52" fontFamily="Arial,Helvetica,sans-serif" fontWeight="900" fontSize="38" fill="#FFFFFF" letterSpacing="4">SEPA</text>
      <circle cx="170" cy="40" r="18" fill="#FFCC00"/>
      <text x="163" y="47" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="22" fill="#003399">€</text>
    </svg>
  );
}

/* ───── SEPA Instant Logo SVG ───── */
function SepaInstantLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="68" rx="8" fill="#003399"/>
      <text x="24" y="46" fontFamily="Arial,Helvetica,sans-serif" fontWeight="900" fontSize="34" fill="#FFFFFF" letterSpacing="3">SEPA</text>
      <circle cx="168" cy="34" r="16" fill="#FFCC00"/>
      <text x="162" y="41" fontFamily="Arial,Helvetica,sans-serif" fontWeight="700" fontSize="19" fill="#003399">€</text>
      <path d="M148 58 L140 74 L152 66 L144 66 L152 50 Z" fill="#003399"/>
      <rect x="40" y="72" rx="4" ry="4" width="90" height="24" fill="#003399"/>
      <text x="85" y="89" fontFamily="Arial,Helvetica,sans-serif" fontWeight="800" fontSize="14" fill="#00BFFF" letterSpacing="1" textAnchor="middle">INSTANT</text>
    </svg>
  );
}

/* ───── Wire Transfer Icon SVG ───── */
function WireTransferIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="78" width="70" height="8" rx="3" fill="#1E40AF" opacity="0.3"/>
      <path d="M50 8 L12 32 L88 32 Z" fill="#1E40AF"/>
      <rect x="12" y="30" width="76" height="6" rx="2" fill="#2563EB"/>
      <rect x="20" y="38" width="8" height="38" rx="2" fill="#3B82F6"/>
      <rect x="36" y="38" width="8" height="38" rx="2" fill="#3B82F6"/>
      <rect x="56" y="38" width="8" height="38" rx="2" fill="#3B82F6"/>
      <rect x="72" y="38" width="8" height="38" rx="2" fill="#3B82F6"/>
      <rect x="12" y="76" width="76" height="5" rx="2" fill="#2563EB"/>
    </svg>
  );
}

/* ───── Trading Volume Chart ───── */
function TradingVolumeChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = [65, 72, 68, 85, 78, 92, 88, 95, 90, 98, 94, 100];

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Trading Volume Growth</h3>
          <p className="text-sm text-gray-500">2025 Monthly Performance</p>
        </div>
      </div>
      <div className="flex items-end gap-2 h-48">
        {values.map((val, i) => (
          <motion.div
            key={i}
            className="flex-1 flex flex-col items-center gap-1"
            initial={{ height: 0 }}
            whileInView={{ height: 'auto' }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400 relative group cursor-pointer"
              style={{ height: `${val * 1.6}px` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scaleY: 1.05 }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {val}%
              </div>
            </motion.div>
            <span className="text-[10px] text-gray-400 font-medium">{months[i]}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm text-gray-500">Consistent growth since 2015</span>
        <span className="text-sm font-bold text-green-600 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" /> +35% YoY
        </span>
      </div>
    </div>
  );
}

/* ───── Payment Methods Section ───── */
function PaymentMethodsSection({ paymentMethods }: { paymentMethods: Array<{ name: string; color: string; logo: string; fallback?: string; svgComponent?: string }> }) {
  return (
    <section id="methods" className="py-20 md:py-28 bg-white">
      <style>{`
        .pm-card {
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pm-card:hover {
          background: #FFD700;
          transform: scale(1.03);
          box-shadow: 0 12px 36px rgba(255,215,0,0.45);
        }
        .pm-card .pm-logo-area {
          background: #ffffff;
          transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pm-card:hover .pm-logo-area {
          background: #FFD700;
        }
        .pm-card .pm-name-bar {
          background: #6b7280;
          transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pm-card:hover .pm-name-bar {
          background: #b8960a;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">20+ Options</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Payment Methods We Support</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Choose from a wide range of trusted payment methods for seamless trading.</p>
          </div>
        </motion.div>

        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                className="pm-card rounded-xl overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.025, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="pm-logo-area flex items-center justify-center px-4" style={{ height: '180px' }}>
                  {method.svgComponent === 'sepa' ? (
                    <SepaLogo className="w-full max-w-[170px]" />
                  ) : method.svgComponent === 'sepa-instant' ? (
                    <SepaInstantLogo className="w-full max-w-[170px]" />
                  ) : method.svgComponent === 'wire' ? (
                    <WireTransferIcon className="w-24 h-24" />
                  ) : method.svgComponent === 'bank' ? (
                    <svg className="w-24 h-24" viewBox="0 0 80 80" fill="none">
                      <rect x="10" y="65" width="60" height="6" rx="2" fill={method.color} opacity="0.3" />
                      <path d="M40 10L8 30h64L40 10z" fill={method.color} />
                      <rect x="10" y="28" width="60" height="4" rx="1" fill={method.color} opacity="0.8" />
                      <rect x="17" y="34" width="7" height="29" rx="1.5" fill={method.color} opacity="0.6" />
                      <rect x="29" y="34" width="7" height="29" rx="1.5" fill={method.color} opacity="0.6" />
                      <rect x="44" y="34" width="7" height="29" rx="1.5" fill={method.color} opacity="0.6" />
                      <rect x="56" y="34" width="7" height="29" rx="1.5" fill={method.color} opacity="0.6" />
                    </svg>
                  ) : (
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="w-auto object-contain"
                      loading="lazy"
                      style={{ maxHeight: '110px', maxWidth: '85%' }}
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (method.fallback && t.src !== method.fallback) {
                          t.src = method.fallback;
                        } else {
                          t.style.display = 'none';
                          const parent = t.parentElement;
                          if (parent) {
                            const initials = method.name.split(' ').map((w: string) => w[0]).join('');
                            parent.innerHTML = `<div style="width:90px;height:90px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:22px;color:#fff;background:${method.color}">${initials}</div>`;
                          }
                        }
                      }}
                    />
                  )}
                </div>
                <div className="pm-name-bar px-3 py-3 text-center">
                  <span className="text-[12px] md:text-[13px] font-extrabold tracking-[0.15em] uppercase text-white leading-tight">
                    {method.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Crypto */}
        <style>{`
          .crypto-icon-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .crypto-icon-card:hover {
            transform: scale(1.08);
          }
          .crypto-icon-card:hover .crypto-icon-img {
            filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
          }
        `}</style>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#133a6b] rounded-3xl px-6 sm:px-12 py-12 md:py-14 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Multi-Chain Support</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Supported Cryptocurrencies</h3>
              <p className="text-blue-200/70 text-sm md:text-base mb-10 max-w-lg mx-auto">Trade the most popular digital assets with confidence.</p>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:gap-8 max-w-3xl mx-auto">
                {[
                  { name: 'Bitcoin', symbol: 'BTC', img: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
                  { name: 'Tether', symbol: 'USDT', img: 'https://assets.coingecko.com/coins/images/325/large/Tether.png' },
                  { name: 'USD Coin', symbol: 'USDC', img: 'https://assets.coingecko.com/coins/images/6319/large/usdc.png' },
                  { name: 'Ethereum', symbol: 'ETH', img: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
                  { name: 'BNB', symbol: 'BNB', img: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png' },
                  { name: 'Solana', symbol: 'SOL', img: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
                ].map((coin, i) => (
                  <motion.div
                    key={coin.symbol}
                    className="crypto-icon-card flex flex-col items-center gap-3 cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-2.5 shadow-lg border border-white/10">
                      <img
                        src={coin.img}
                        alt={coin.name}
                        className="crypto-icon-img w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <span className="block text-white text-xs md:text-sm font-bold leading-tight">{coin.name}</span>
                      <span className="block text-blue-300/60 text-[11px] font-semibold">({coin.symbol})</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="mt-10 text-blue-300/50 text-sm font-medium italic tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                And More...
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ MAIN PAGE ═══════════════════════════════ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Why Us', href: '#why' },
    { label: 'How It Works', href: '#how' },
    { label: 'Payment Methods', href: '#methods' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const paymentMethods: Array<{ name: string; color: string; logo: string; fallback?: string; svgComponent?: string }> = [
    { name: 'SEPA', color: '#003399', logo: '', svgComponent: 'sepa' },
    { name: 'SEPA INSTANT', color: '#003399', logo: '', svgComponent: 'sepa-instant' },
    { name: 'REVOLUT', color: '#0075EB', logo: 'https://cdn.simpleicons.org/revolut/191C1F', fallback: 'https://logo.clearbit.com/revolut.com' },
    { name: 'WISE', color: '#9FE870', logo: 'https://cdn.simpleicons.org/wise/9FE870', fallback: 'https://logo.clearbit.com/wise.com' },
    { name: 'PAYPAL', color: '#0070ba', logo: 'https://cdn.simpleicons.org/paypal/0070ba', fallback: 'https://logo.clearbit.com/paypal.com' },
    { name: 'PAYONEER', color: '#FF4800', logo: 'https://cdn.simpleicons.org/payoneer/FF4800', fallback: 'https://logo.clearbit.com/payoneer.com' },
    { name: 'BANK TRANSFER', color: '#1a56db', logo: '', svgComponent: 'bank' },
    { name: 'N26', color: '#36A18B', logo: 'https://cdn.simpleicons.org/n26/36A18B', fallback: 'https://logo.clearbit.com/n26.com' },
    { name: 'BUNQ', color: '#39C87C', logo: 'https://logo.clearbit.com/bunq.com', fallback: 'https://cdn.brandfetch.io/bunq.com/w/512/h/512/logo' },
    { name: 'ZELLE', color: '#6D1ED4', logo: 'https://cdn.simpleicons.org/zelle/6D1ED4', fallback: 'https://logo.clearbit.com/zellepay.com' },
    { name: 'CASH APP', color: '#00D632', logo: 'https://cdn.simpleicons.org/cashapp/00D632', fallback: 'https://logo.clearbit.com/cash.app' },
    { name: 'WIRE TRANSFER', color: '#1E40AF', logo: '', svgComponent: 'wire' },
    { name: 'BANK OF AMERICA', color: '#E31837', logo: 'https://cdn.simpleicons.org/bankofamerica/E31837', fallback: 'https://logo.clearbit.com/bankofamerica.com' },
    { name: 'ZEN', color: '#0A2540', logo: 'https://logo.clearbit.com/zen.com', fallback: 'https://cdn.brandfetch.io/zen.com/w/512/h/512/logo' },
    { name: 'WEBMONEY', color: '#036CB5', logo: 'https://cdn.simpleicons.org/webmoney/036CB5', fallback: 'https://logo.clearbit.com/wmtransfer.com' },
    { name: 'WORLDFIRST', color: '#E8490F', logo: 'https://logo.clearbit.com/worldfirst.com', fallback: 'https://cdn.brandfetch.io/worldfirst.com/w/512/h/512/logo' },
    { name: 'AIRWALLEX', color: '#E94E3D', logo: 'https://logo.clearbit.com/airwallex.com', fallback: 'https://cdn.brandfetch.io/airwallex.com/w/512/h/512/logo' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      <FloatingContactButtons />

      {/* ═══════════ NAVIGATION ═══════════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center gap-2.5 group">
              <Trade84Logo size={40} />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">Trade<span className="text-blue-600">84</span></span>
                <span className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase leading-none">Trusted Since 2015</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-2 text-[14px] font-medium text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/80 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-[#00C853] hover:bg-[#00b848] text-white font-bold py-2.5 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full text-center bg-[#00C853] text-white font-bold py-3 px-4 rounded-lg"
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <FloatingIcons />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <BadgeCheck className="w-4 h-4" /> Verified Trader Since 2015
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
              >
                Trade84 — Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  Trusted Trader Since 2015
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Buy &amp; Sell USDT, BTC, ETH with PayPal, Revolut, SEPA, Wise &amp; 20+ Payment Methods. Best rates, instant response, real human support.
              </motion.p>

              {/* Verified Trust Line */}
              <motion.div
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
              >
                <a
                  href="https://noones.com/user/trade84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Verified on Noones
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
                <a
                  href="https://localcoinswap.com/profile/trade84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-green-300 hover:shadow-md text-gray-700 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Verified on LocalCoinSwap
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <style>{`
                  @keyframes pulseZoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.06); }
                  }
                  .contact-btn-pulse {
                    animation: pulseZoom 2s ease-in-out infinite;
                  }
                  .contact-btn-pulse:hover {
                    animation: none;
                    transform: scale(1.08);
                  }
                `}</style>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="contact-btn-pulse inline-flex items-center justify-center text-white font-extrabold py-4 px-14 rounded-2xl text-lg shadow-xl transition-all duration-300 active:scale-[0.97]"
                  style={{ background: '#00C853', boxShadow: '0 8px 30px rgba(0,200,83,0.4)' }}
                >
                  CONTACT US
                </button>
              </motion.div>
            </div>

            {/* Right: Hero visual */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            >
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-1 shadow-2xl shadow-blue-600/20">
                  <div className="bg-gradient-to-br from-blue-500 to-sky-600 rounded-[1.35rem] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                      alt="Professional handshake — trusted partnership"
                      className="w-full h-[420px] object-cover mix-blend-overlay opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-700/40 to-transparent rounded-[1.35rem]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                      >
                        <Trade84Logo size={64} />
                      </motion.div>
                      <motion.p
                        className="text-4xl font-extrabold mb-3"
                        style={{ textShadow: '0 0 30px rgba(96,165,250,0.6), 0 0 60px rgba(234,179,8,0.3)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      >
                        Win-Win Partnership
                      </motion.p>
                      <motion.p
                        className="text-blue-100 text-xl font-medium mb-4"
                        style={{ textShadow: '0 0 20px rgba(96,165,250,0.4)' }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                      >
                        Your success is our success. Let&apos;s trade together.
                      </motion.p>
                      {/* Verified badges inside hero image */}
                      <motion.div
                        className="flex gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                      >
                        <VerifiedBadge platform="noones" url="https://noones.com/user/trade84" small />
                        <VerifiedBadge platform="localcoinswap" url="https://localcoinswap.com/profile/trade84" small />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-blue-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Verified Trader</div>
                      <div className="text-xs text-gray-500">Since 2015</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl border border-blue-100"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-blue-600 fill-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">5 / 5</div>
                      <div className="text-xs text-gray-500">Customer Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Statistics Bar ── */}
          <motion.div
            className="mt-16 md:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {[
                { target: 1000000, suffix: '+', label: 'Successful Trades', icon: TrendingUp },
                { target: 10000, suffix: '+', label: 'Happy Partners', icon: Handshake },
                { target: 0, display: '24/7', label: 'Support Available', icon: Headphones },
                { target: 0, display: '5/5', label: 'Average Rating', icon: Star },
                { target: 10, suffix: '+', label: 'Years of Experience', icon: BadgeCheck },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center justify-center py-7 md:py-9 px-4 rounded-2xl bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#133a6b] shadow-xl hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                >
                  <stat.icon className="w-7 h-7 mb-3 text-blue-400/70" />
                  <div className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold mb-1" style={{ color: '#f5c542', textShadow: '0 0 20px rgba(245,197,66,0.3)' }}>
                    {stat.display ? stat.display : <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
                  </div>
                  <div className="text-white/80 text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Verified Badges Below Stats */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href="https://noones.com/user/trade84"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg text-gray-700 font-bold px-5 py-3 rounded-xl text-sm transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">N</span>
                </div>
                <span>Verified on Noones</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </a>
              <a
                href="https://localcoinswap.com/profile/trade84"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg text-gray-700 font-bold px-5 py-3 rounded-xl text-sm transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">LC</span>
                </div>
                <span>Verified on LocalCoinSwap</span>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ WHY TRADE84 ═══════════ */}
      <section id="why" className="py-20 md:py-28 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Advantages</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Why Trade with Trade84?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Six reasons why thousands of traders choose us as their trusted partner.</p>
          </motion.div>

          <WhyWheel />

          {/* Verified badges under Why section */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="https://noones.com/user/trade84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 font-bold px-5 py-3 rounded-xl text-sm transition-all"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              Check our Noones Profile →
            </a>
            <a
              href="https://localcoinswap.com/profile/trade84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 hover:bg-green-100 text-green-700 font-bold px-5 py-3 rounded-xl text-sm transition-all"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              Check our LocalCoinSwap Profile →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section id="how" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">Four simple steps to complete your trade with Trade84.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              { icon: Grid3X3, title: 'Choose Your Pair', desc: 'Select the crypto you want to buy or sell and your preferred payment method from 20+ options.', color: 'from-blue-500 to-blue-700' },
              { icon: MessageCircle, title: 'Contact Us', desc: 'Reach out on Telegram or WhatsApp. We respond within minutes — real humans, no bots.', color: 'from-sky-500 to-cyan-600' },
              { icon: Send, title: 'Make the Transfer', desc: 'Send the agreed amount via your chosen method. We confirm receipt promptly.', color: 'from-violet-500 to-purple-700' },
              { icon: CheckCircle, title: 'Trade Complete', desc: 'Receive your crypto or fiat directly. Fast, secure, and hassle-free every time.', color: 'from-emerald-500 to-green-700' },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                <div className="relative z-10 mb-5">
                  <div className="relative w-20 h-20 mx-auto">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                      <span className="text-sm font-extrabold text-blue-600">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PAYMENT METHODS ═══════════ */}
      <PaymentMethodsSection paymentMethods={paymentMethods} />

      {/* ═══════════ TRUST & VERIFICATION ═══════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f7ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Verified &amp; Trusted</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Trust &amp; Verification</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Verified on leading platforms with thousands of successful trades and excellent ratings.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Verified Platform Badges */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-100"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Verified Profiles</h3>
              </div>

              <div className="space-y-4">
                <VerifiedBadge platform="noones" url="https://noones.com/user/trade84" />
                <VerifiedBadge platform="localcoinswap" url="https://localcoinswap.com/profile/trade84" />
              </div>

              {/* Trust indicators */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'KYC Verified', icon: BadgeCheck, color: 'text-blue-600 bg-blue-50' },
                  { label: 'Escrow Protected', icon: Shield, color: 'text-green-600 bg-green-50' },
                  { label: 'ID Verified', icon: ShieldCheck, color: 'text-violet-600 bg-violet-50' },
                ].map((badge, i) => (
                  <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-xl ${badge.color}`}>
                    <badge.icon className="w-5 h-5" />
                    <span className="text-[11px] font-bold text-center leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trading Volume Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TradingVolumeChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">Real reviews from verified trades on trusted platforms.</p>
          </motion.div>

          {/* Real Reviews CTA */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">5 / 5 Average Rating</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Our real customer reviews are available directly on our verified Noones and LocalCoinSwap profiles. We believe in full transparency — check our trade history and feedback from real partners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://noones.com/user/trade84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-extrabold text-sm">N</span>
                  </div>
                  View Reviews on Noones
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
                <a
                  href="https://localcoinswap.com/profile/trade84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-extrabold text-sm">LC</span>
                  </div>
                  View Reviews on LocalCoinSwap
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>


            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT / CTA ═══════════ */}
      <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">Ready to Trade?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch now for instant support, competitive rates, and a hassle-free trading experience.
            </p>

            {/* Contact Icons */}
            <div className="flex gap-6 justify-center items-center mb-8">
              <motion.a
                href="https://t.me/Trade84"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#0088cc] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,136,204,0.5)] transition-all"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                title="@Trade84 on Telegram"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </motion.a>
              <motion.a
                href="https://wa.me/84362429792"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                title="+84 362 429 792 on WhatsApp"
              >
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </motion.a>
            </div>

            {/* Verified links in contact */}
            <div className="flex flex-wrap justify-center gap-3">
              <VerifiedBadge platform="noones" url="https://noones.com/user/trade84" small />
              <VerifiedBadge platform="localcoinswap" url="https://localcoinswap.com/profile/trade84" small />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center gap-2.5 mb-5">
                <Trade84Logo size={36} />
                <div>
                  <span className="text-lg font-extrabold text-white">Trade<span className="text-blue-400">84</span></span>
                  <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">Trusted Since 2015</p>
                </div>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Professional crypto trading since 2015. Fast, secure, and reliable — your trusted partner for every trade.
              </p>
              <div className="flex gap-3">
                <a href="https://t.me/Trade84" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-[#0088cc] rounded-xl flex items-center justify-center transition-colors" title="Message on Telegram">
                  <Send className="w-4 h-4" />
                </a>
                <a href="https://wa.me/84362429792" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-colors" title="Chat on WhatsApp">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Contact</h4>
              <div className="flex gap-5 justify-center md:justify-start mb-6">
                <a
                  href="https://t.me/Trade84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#0088cc] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(0,136,204,0.5)] hover:scale-110 transition-all duration-300"
                  title="@Trade84 on Telegram"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a
                  href="https://wa.me/84362429792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
                  title="+84 362 429 792 on WhatsApp"
                >
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start text-sm text-gray-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 — Always Online</span>
              </div>
            </div>

            {/* Verified Profiles & Legal */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Verified Profiles</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="https://noones.com/user/trade84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    Noones — trade84
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://localcoinswap.com/profile/trade84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    LocalCoinSwap — trade84
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              </ul>

              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3" />
                    AML Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-gray-500 text-sm text-center">
                © 2026 Trade84. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://noones.com/user/trade84" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs transition-colors flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" /> Noones
                </a>
                <a href="https://localcoinswap.com/profile/trade84" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs transition-colors flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" /> LocalCoinSwap
                </a>
                <a href="https://t.me/Trade84" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs transition-colors">Telegram</a>
                <a href="https://wa.me/84362429792" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs transition-colors">WhatsApp</a>
              </div>
              <p className="text-gray-600 text-xs text-center">
                Independent trader — not a financial institution. Cryptocurrency trading involves risk.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
