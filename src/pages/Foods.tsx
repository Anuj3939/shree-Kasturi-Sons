import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const Foods = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

  return (
    <div 
      ref={ref}
      className="h-[300vh] w-full bg-[#020617] relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle 800px at 50% 0%, rgba(251,191,36,0.5), transparent 60%),
          radial-gradient(circle 600px at 50% 0%, rgba(251,191,36,0.4), transparent 50%),
          radial-gradient(circle 400px at 50% 0%, rgba(251,191,36,0.3), transparent 40%)
        `,
        backgroundAttachment: 'scroll'
      }}
    >
      <Navigation />

      <section className="h-screen flex items-center justify-center sticky top-0">
        <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(251,191,36,0.20),transparent)]"></div>
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(251,191,36,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(251,191,36,0.08)_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </motion.div>

        <motion.div className="relative z-10 container mx-auto px-4 max-w-6xl" style={{ y: contentY }}>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-vintage text-white mb-4">
                Premium 
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-vintage text-white mb-4">
                Dry Fruits
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Experience our signature processed cashew nuts.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['Premium Quality with Premium Packaging' ].map((chip) => (
                  <span key={chip} className="px-4 py-1.5 rounded-full text-sm bg-white/10 text-white border border-white/20">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              ref={imageRef}
              initial={{ opacity: 0, scale: 1.85 }} 
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, -5, 5, -4, 4, 0],
                transition: { 
                  duration: 0.7,
                rotate: { 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
                }
              }} 
              className="relative mx-auto w-full max-w-md perspective-1000"
              whileHover={{ 
                scale: 1.5,
                rotateY: 10,
                rotateX: 10,
                transition: { duration: 0.7, ease: "easeOut" }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                scale: imageScale
              }}
            >
              <motion.div 
                className="aspect-[4/5] rounded-2xl overflow-hidden border border-yellow-300/0 shadow-none" 
                style={{ 
                  transformStyle: 'preserve-3d',
                  boxShadow: 'none'
                }}
              >
                <motion.img 
                  src="/lovable-uploads/foods2.png" 
                  alt="Foods" 
                  className="w-full h-full object-contain" 
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 min-h-screen relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-vintage text-white mb-4">
              More Premium Products
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're expanding our premium food offerings with a wide variety of dry fruits and specialty items.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm" 
            style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)'}}
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 shadow-lg">
                <span className="text-2xl">🥜</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Premium Dry Fruits Collection</h3>
              <p className="text-yellow-700 text-lg mb-6 max-w-2xl mx-auto">
                Get ready for our upcoming collection of premium dry fruits including almonds, cashews, pistachios, walnuts, and many more specialty items.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Almonds', 'Cashews', 'Pistachios', 'Walnuts', 'Raisins', 'Dates', 'Figs', 'Apricots'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-yellow-200 to-yellow-300 p-3 rounded-lg border border-yellow-400/30 shadow-lg"
                  >
                    <span className="text-yellow-800 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full shadow-lg"
              >
                <span className="text-lg">🚀</span>
                <span className="font-semibold">Coming Soon</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Foods;


