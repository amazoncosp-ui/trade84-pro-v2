'use client';

import { motion } from 'framer-motion';
import { 
  Handshake, 
  Shield, 
  Clock, 
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
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Animated Counter Component
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast do you respond?",
      answer: "We typically respond within minutes on Telegram/WhatsApp. Our team is available 24/7 to assist with your trading needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support 20+ payment methods including PayPal, Revolut, SEPA, Wise, Payoneer, Bank Transfer, and many more. Contact us to confirm your preferred method."
    },
    {
      question: "What are your rates?",
      answer: "We offer competitive rates that are often better than traditional exchanges. Rates vary based on payment method and amount. Contact us for current rates."
    },
    {
      question: "Is there a minimum trade amount?",
      answer: "Minimum amounts depend on the payment method. Most methods start from $50-100. Contact us for specific minimums for your preferred method."
    },
    {
      question: "How do I know this is safe?",
      answer: "Trade84 has been operating since 2015 with thousands of satisfied customers. We're a trusted P2P trader with a proven track record. You can verify our reputation through our testimonials."
    },
    {
      question: "Do you charge fees?",
      answer: "No middleman fees! Our competitive rates already include everything. What you see is what you get - no hidden charges."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-blue-600" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-600" />
            )}
          </button>
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const paymentMethods = [
    { name: 'PayPal', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg', desc: 'Global digital payments' },
    { name: 'Revolut', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/revolut.svg', desc: 'Digital banking app' },
    { name: 'SEPA', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/SEPA_logo.svg', desc: 'European bank transfers' },
    { name: 'SEPA Instant', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/SEPA_logo.svg', desc: 'Instant EU transfers' },
    { name: 'Wise', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wise.svg', desc: 'International transfers' },
    { name: 'Payoneer', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/payoneer.svg', desc: 'Global payment platform' },
    { name: 'Bank Transfer', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bank.svg', desc: 'Traditional banking' },
    { name: 'Wire Transfer', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bank.svg', desc: 'International wires' },
    { name: 'Bank Of America', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bankofamerica.svg', desc: 'US banking leader' },
    { name: 'N26', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/n26.svg', desc: 'Mobile banking' },
    { name: 'Bunq', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bunq.svg', desc: 'European neobank' },
    { name: 'Neteller', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/neteller.svg', desc: 'E-wallet service' },
    { name: 'Zen', logo: 'https://zen.com/static/images/zen-logo.svg', desc: 'Business payments' },
    { name: 'Skrill', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/skrill.svg', desc: 'Digital wallet' },
    { name: 'Binance Pay', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/binance.svg', desc: 'Crypto payments' },
    { name: 'Cash App', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cashapp.svg', desc: 'Mobile payments' },
    { name: 'Venmo', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/venmo.svg', desc: 'Social payments' },
    { name: 'Google Pay', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlepay.svg', desc: 'Google payments' },
    { name: 'Apple Pay', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applepay.svg', desc: 'Apple payments' },
    { name: 'WorldFirst', logo: 'https://www.worldfirst.com/static/wf-logo.svg', desc: 'FX & payments' },
    { name: 'Airwallex', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airwallex.svg', desc: 'Global payments' },
    { name: 'Zelle', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zelle.svg', desc: 'US bank transfers' },
    { name: 'WebMoney', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webmoney.svg', desc: 'Digital currency' }
  ];

  const advantages = [
    { icon: Zap, title: 'Instant Response', desc: 'Get replies within minutes on Telegram/WhatsApp' },
    { icon: TrendingUp, title: 'Best Rates', desc: 'Competitive rates better than most exchanges' },
    { icon: Headphones, title: 'Personal Support', desc: '24/7 dedicated human support team' },
    { icon: DollarSign, title: 'No Middleman Fees', desc: 'Direct trading with transparent pricing' },
    { icon: Clock, title: '24/7 Availability', desc: 'Trade anytime, anywhere in the world' },
    { icon: Settings, title: 'Flexible Amounts & Methods', desc: 'Wide range of amounts and payment options' },
    { icon: Shield, title: 'Trusted Reputation', desc: 'Operating since 2015 with proven track record' }
  ];

  const testimonials = [
    { name: 'Michael R.', initials: 'MR', quote: 'Trade84 has been my go-to for P2P trading. Fast, reliable, and great rates every time!', bg: 'bg-blue-500' },
    { name: 'Sarah L.', initials: 'SL', quote: 'Amazing service! They respond instantly and the whole process is so smooth. Highly recommended.', bg: 'bg-green-500' },
    { name: 'David K.', initials: 'DK', quote: 'Been using Trade84 for over a year. Professional service and competitive rates. Never had any issues.', bg: 'bg-purple-500' },
    { name: 'Emma T.', initials: 'ET', quote: 'The best P2P trader I&apos;ve worked with. Personal service and they support so many payment methods.', bg: 'bg-pink-500' },
    { name: 'James W.', initials: 'JW', quote: 'Trade84 is trustworthy and efficient. Their 24/7 support is genuine - they actually reply!', bg: 'bg-orange-500' },
    { name: 'Lisa M.', initials: 'LM', quote: 'Professional, fast, and reliable. Trade84 makes P2P trading simple and stress-free.', bg: 'bg-indigo-500' }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Handshake className="w-24 h-24 md:w-32 md:h-32 text-blue-600 mx-auto mb-4" />
              </motion.div>
              <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Trusted P2P Trading –<br />
            <span className="text-blue-600">Contact Trade84 Directly Now</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-blue-600 font-bold mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Trade84 – Professional P2P Trader | Many Payment Methods | Best Rates | 24/7 Support
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                <AnimatedCounter target={10000} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Happy Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                <AnimatedCounter target={1000000} suffix="+" />
              </div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Trades</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">Instant</div>
              <div className="text-sm md:text-base text-gray-600 mt-1">Response</div>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 md:py-5 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            whileHover={{ 
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Now
          </motion.button>

          {/* Payment Method Logos */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg" alt="PayPal" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/revolut.svg" alt="Revolut" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wise.svg" alt="Wise" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlepay.svg" alt="Google Pay" className="w-8 h-8" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applepay.svg" alt="Apple Pay" className="w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Methods We Support
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from 20+ trusted payment methods. Fast, secure, and reliable transactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img 
                      src={method.logo} 
                      alt={method.name} 
                      className="w-12 h-12 object-contain filter"
                      style={{ filter: 'brightness(0.2)' }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{method.desc}</p>
                  <a 
                    href="https://t.me/nicetrade84"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                  >
                    Contact Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Trade with Trade84?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional P2P trading service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to complete your P2P trade with Trade84.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Grid3X3, title: 'Choose Payment Method', desc: 'Select from 20+ supported payment methods' },
              { icon: MessageCircle, title: 'Message Trade84', desc: 'Contact us on Telegram or WhatsApp' },
              { icon: Send, title: 'Transfer Amount', desc: 'Send agreed amount to our account' },
              { icon: CheckCircle, title: 'Complete Trade', desc: 'Receive funds directly to your account' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center -mt-10">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Feedback
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied customers who trust Trade84 for their P2P trading needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bg} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Get answers to common questions about trading with Trade84.
            </p>
          </motion.div>

          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Trade? Contact Trade84 Now
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-90">
              Get in touch with our team for instant support and competitive rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <motion.a
                href="https://t.me/nicetrade84"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 min-w-[200px] w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Telegram
              </motion.a>

              <motion.a
                href="https://wa.me/message"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 min-w-[200px] w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2015–2026 Trade84. All rights reserved. Independent P2P trader — not a financial institution.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://t.me/nicetrade84"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/message"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}