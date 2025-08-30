import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/Herosection.jpg";
import img2 from "../assets/Herosection2.jpg";
import img3 from "../assets/Herosection3.jpg";

const images = [img1, img2, img3];

const slideContent = [
  {
    subtitle: "Purely Hand-Crafted",
    title: (
      <>
        Charm For Your <span className="font-extrabold">Everyday</span>
      </>
    ),
    description:
      "Experience timeless craftsmanship that elevates your daily style with elegance and charm.",
  },
  {
    subtitle: "Discover Elegance",
    title: (
      <>
        Our <span className="font-extrabold">Earrings</span>
      </>
    ),
    description:
      "Find the perfect pair to accentuate any outfit, crafted with care and designed for grace.",
  },
  {
    subtitle: "Luxury Collection",
    title: (
      <>
        Graceful <span className="font-extrabold">Necklaces</span>{" "}
        <br className="hidden sm:inline" />
        Eye-Catching Designs
      </>
    ),
    description:
      "Indulge in our exquisite necklaces, where beauty meets bold sophistication for every occasion.",
  },
];

const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.7,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  useEffect(() => {
    if (current === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 1000);
    }
    if (current === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(totalSlides);
      }, 1000);
    }
  }, [current, totalSlides]);

  const visibleIndex =
    current === 0 ? totalSlides - 1 : current === totalSlides + 1 ? 0 : current - 1;

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      
      <div
        ref={slideRef}
        className={`flex w-full h-full ${
          isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
      
        <div
          className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images[totalSlides - 1]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black/50 to-transparent"></div>
        </div>

       
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black/50 to-transparent"></div>

            
            <AnimatePresence mode="wait">
              {visibleIndex === index && (
                <motion.div
                  key={index}
                  className="
                    relative z-10 
                    w-full sm:max-w-sm md:max-w-xl 
                    px-4 sm:px-6 md:px-8 
                    text-white 
                    h-full 
                    flex flex-col 
                    justify-center 
                    items-center md:items-start 
                    text-center md:text-left
                  "
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={textVariants}
                >
                  <motion.p
                    className="uppercase tracking-[0.15em] text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4 font-semibold text-white"
                    variants={childVariants}
                  >
                    {slideContent[index].subtitle}
                  </motion.p>
                  <motion.h1
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4 text-white"
                    variants={childVariants}
                  >
                    {slideContent[index].title}
                  </motion.h1>
                  <motion.p
                    className="mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg text-white opacity-90 max-w-md"
                    variants={childVariants}
                  >
                    {slideContent[index].description}
                  </motion.p>
                  <motion.button
                    whileHover={{
                      backgroundColor: "#ca8a04",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-transparent border-2 border-white text-white rounded text-sm sm:text-base font-bold tracking-wide transition-all duration-300"
                    variants={childVariants}
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        
        <div
          className="w-full h-full flex-shrink-0 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 md:from-black/50 to-transparent"></div>
        </div>
      </div>

     
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index + 1 === current
                ? "bg-yellow-500 scale-110 sm:scale-125"
                : "bg-yellow-300/50 hover:bg-yellow-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
