import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import heroDesktop from "@/assets/hero-desktop.jpeg";
import heroMobile from "@/assets/hero-mobile.jpeg";
import logo from "@/assets/floraboutique-logo.jpeg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, MapPin, Flower2, ShoppingBag } from "lucide-react";
import BouquetSelector from "@/components/BouquetSelector";
import Gallery from "@/components/Gallery";
import OrderProcess from "@/components/OrderProcess";
import LocationInfo from "@/components/LocationInfo";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const IndexV2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;
      // Show only after scrolling past the hero, and only when going down
      if (y > window.innerHeight * 0.6 && goingDown) setShowNav(true);
      else if (!goingDown || y < 80) setShowNav(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50 transition-transform duration-500 ease-out ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Flora Boutique" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-lg text-primary">Flora Boutique</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#catalogo" className="hover:text-primary transition-colors">Catalogo</a>
            <a href="#galeria" className="hover:text-primary transition-colors">Galeria</a>
            <a href="#proceso" className="hover:text-primary transition-colors">Como pedir</a>
            <a href="#ubicacion" className="hover:text-primary transition-colors">Ubicacion</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="relative p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>

      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={isMobile ? heroMobile : heroDesktop}
        bgImageSrc={isMobile ? heroMobile : heroDesktop}
        title="Flora Boutique"
        date="Floreria artesanal · Chile"
        scrollToExpand="Desplaza para descubrir"
        textBlend={false}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <img src={logo} alt="Flora Boutique" className="w-20 h-20 rounded-full object-cover mx-auto shadow-elegant" />
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Flores que <em className="italic">cuentan</em> historias
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada ramo de Flora Boutique es disenado a mano para celebrar tus momentos mas importantes.
          </p>
          <Button size="lg" className="bg-gradient-brand" asChild>
            <a href="#catalogo">Ver catalogo</a>
          </Button>
        </div>
      </ScrollExpandMedia>

      <BouquetSelector />
      <Gallery />
      <OrderProcess />
      <LocationInfo />

      <section id="contacto" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-primary-glow blur-3xl"
        />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Flower2 className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              Hagamos de tu momento <em className="italic">algo unico</em>
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10">
              Escribenos por Instagram o WhatsApp y disenemos juntos el ramo perfecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-elegant" asChild>
                <a href="https://www.instagram.com/floraboutique.cl/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" /> @floraboutique.cl
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-sm opacity-75">
              <MapPin className="w-4 h-4" /> Despacho en Santiago, Chile
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background py-10 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Flora Boutique" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-primary">Flora Boutique</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Flora Boutique. Hecho con amor 🌸</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexV2;
